import type {KitEnvironment} from './waitlist';
const reply=(status:number,message:string)=>Response.json({message},{status,headers:{'Cache-Control':'no-store'}});
const attempts=new Map<string,{count:number;until:number}>();
export async function handleTeams(request:Request,env:KitEnvironment):Promise<Response>{
 if(request.method!=='POST')return new Response(null,{status:405,headers:{Allow:'POST'}});
 if(request.headers.get('Origin')!==new URL(request.url).origin)return reply(403,'Please use the inquiry form on the TNAT website.');
 if(!request.headers.get('Content-Type')?.startsWith('application/json'))return reply(415,'Please submit the form again.');
 let data:Record<string,unknown>;
 try{const reader=request.body?.getReader();if(!reader)return reply(400,'Please complete the form.');let length=0;const chunks:Uint8Array[]=[];while(true){const{done,value}=await reader.read();if(done)break;length+=value.length;if(length>4096){await reader.cancel();return reply(413,'This request is too large.');}chunks.push(value)}const body=new Uint8Array(length);let offset=0;for(const chunk of chunks){body.set(chunk,offset);offset+=chunk.length}data=JSON.parse(new TextDecoder().decode(body));if(!data||Array.isArray(data)||typeof data!=='object')return reply(400,'Please complete the form.')}catch{return reply(400,'Please submit the form again.')}
 if(data.website||data.consent!==true)return reply(400,'Please submit the inquiry form again.');
 const clean=(key:string,max:number)=>typeof data[key]==='string'&&data[key].trim().length<=max?data[key].trim():'';
 const name=clean('name',100),organization=clean('organization',150),role=clean('role',100),volume=clean('monthlyVolume',50),email=clean('email',254).toLowerCase();
 if(!name||!organization||!role||!['Under 100','100–499','500–999','1,000+','Not sure yet'].includes(volume)||! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return reply(400,'Please complete every field and use a valid email address.');
 const ip=request.headers.get('CF-Connecting-IP');if(ip){const now=Date.now();for(const[k,v]of attempts)if(v.until<now)attempts.delete(k);const a=attempts.get(ip);if((a&&a.count>=5)||(!a&&attempts.size>=5000))return reply(429,'Too many attempts. Please try again in a few minutes.');attempts.set(ip,{count:(a?.count??0)+1,until:a?.until??now+600000})}
 if(!env.DB)return reply(503,'We couldn’t save your inquiry. Please email contact@drinktnat.com.');
 try{await env.DB.prepare('INSERT INTO team_inquiries (id, created_at, name, organization, role, monthly_volume, email, consent) VALUES (?, ?, ?, ?, ?, ?, ?, 1)').bind(crypto.randomUUID(),new Date().toISOString(),name,organization,role,volume,email).run();return reply(200,'Your inquiry is saved. Thank you for your interest in TNAT.')}catch{console.error('team_inquiry_storage_failed');return reply(503,'We couldn’t save your inquiry. Please try again or email contact@drinktnat.com.')}
}
