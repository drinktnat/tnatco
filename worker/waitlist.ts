export interface KitEnvironment {
  DB?: { prepare(sql: string): { bind(...values: unknown[]): { run(): Promise<unknown> } } };
  KIT_API_KEY?: string;
  KIT_FORM_ID?: string;
}

const reply = (status: number, message: string) => Response.json({message}, {status, headers:{'Cache-Control':'no-store'}});
const configured = (env: KitEnvironment) => Boolean(env.DB || (env.KIT_API_KEY && /^\d+$/.test(env.KIT_FORM_ID ?? '')));

async function saveSignup(env: KitEnvironment, email: string, source: string) {
  if (!env.DB) throw new Error('Signup storage unavailable');
  await env.DB.prepare('INSERT INTO waitlist_signups (email, created_at, consent, consent_version, source) VALUES (?, ?, 1, ?, ?) ON CONFLICT(email) DO NOTHING').bind(email.toLowerCase(), new Date().toISOString(), '2026-09-22', source).run();
}
const attempts = new Map<string,{count:number;expires:number}>();

export async function handleWaitlist(request: Request, env: KitEnvironment, send: typeof fetch = fetch): Promise<Response> {
  if (request.method === 'GET') return Response.json({ready:configured(env)}, {headers:{'Cache-Control':'no-store'}});
  if (request.method !== 'POST') return new Response(null,{status:405,headers:{Allow:'GET, POST'}});
  const origin=request.headers.get('Origin');
  if (!origin || origin!==new URL(request.url).origin) return reply(403,'Please use the signup form on the TNAT website.');
  if (!request.headers.get('Content-Type')?.startsWith('application/json')) return reply(415,'Please submit the email form again.');
  if (!configured(env)) return reply(503,'Waitlist signup is opening soon. Your email has not been saved. Please check back or email contact@drinktnat.com.');
  let data: Record<string,unknown>;
  try {
    const reader=request.body?.getReader();
    if(!reader) return reply(400,'Please enter your email address.');
    const chunks:Uint8Array[]=[];let length=0;
    while(true){const{done,value}=await reader.read();if(done)break;length+=value.length;if(length>2048){await reader.cancel();return reply(413,'This request is too large.');}chunks.push(value);}
    const body=new Uint8Array(length);let offset=0;for(const chunk of chunks){body.set(chunk,offset);offset+=chunk.length;}
    data=JSON.parse(new TextDecoder().decode(body));
    if(!data||Array.isArray(data)||typeof data!=='object')return reply(400,'Please submit the email form again.');
  }catch{return reply(400,'Please submit the email form again.');}
  if(data.website) return reply(400,'Please leave the optional website field blank.');
  const email=typeof data.email==='string'?data.email.trim():'';
  if(email.length>254||! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return reply(400,'Please enter a valid email address.');
  if(data.consent!==true)return reply(400,'Please agree to receive launch emails before joining.');
  // A bounded, best-effort per-isolate throttle; Kit also enforces API limits.
  const ip=request.headers.get('CF-Connecting-IP');
  if(ip){const now=Date.now();for(const[key,value]of attempts){if(value.expires<now)attempts.delete(key);}
    const item=attempts.get(ip);if(item&&item.count>=5)return reply(429,'Too many attempts. Please try again in a few minutes.');
    if(!item&&attempts.size>=5000)return reply(429,'Please try again in a few minutes.');
    attempts.set(ip,{count:(item?.count??0)+1,expires:item?.expires??now+600000});}
  if (env.DB) {
    try {
      await saveSignup(env, email, data.source === 'hero' ? 'hero' : 'footer');
      return reply(200, "You're on the list.");
    } catch {
      console.error('waitlist_storage_failed');
      return reply(503, 'We couldn’t save your email. Please try again or email contact@drinktnat.com.');
    }
  }
  const headers={'Content-Type':'application/json','X-Kit-Api-Key':env.KIT_API_KEY!};
  try {
    const created=await send('https://api.kit.com/v4/subscribers',{method:'POST',headers,body:JSON.stringify({email_address:email,state:'inactive'}),signal:AbortSignal.timeout(10000)});
    if(!created.ok)return reply(created.status===429?429:502,'We couldn’t complete your signup. Please try again shortly.');
    const added=await send(`https://api.kit.com/v4/forms/${env.KIT_FORM_ID}/subscribers`,{method:'POST',headers,body:JSON.stringify({email_address:email,referrer:'https://drinktnat.com/'}),signal:AbortSignal.timeout(10000)});
    if(!added.ok)return reply(added.status===429?429:502,'We couldn’t complete your waitlist signup. Please try again shortly.');
    return reply(200,'Request received. Check your inbox for any confirmation email to finish joining.');
  }catch{return reply(502,'We couldn’t connect to the waitlist. Please try again shortly.');}
}
