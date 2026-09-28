import './waitlist.test.mjs';
import './teams.test.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
const {default:worker}=await import('../dist/server/index.js');
const env={ASSETS:{fetch:async()=>new Response('Not found',{status:404})}};
const ctx={waitUntil(){},passThroughOnException(){}};
test('every route renders the current beeast product without legacy claims or private recipe',async()=>{
 for(const path of ['/','/formula','/honey','/process','/about','/wholesale','/contact','/privacy']){
  const response=await worker.fetch(new Request('https://drinktnat.com'+path,{headers:{accept:'text/html'}}),env,ctx);
  assert.equal(response.status,200,path);const html=await response.text();
  assert.match(html,/beeast/);assert.doesNotMatch(html,/Seven ingredients|raw Florida honey|Chocolate|45 days|220 calories|295mg|3\.1g|whey isolate|monk fruit|cocoa|lactase enzyme|208\.5|NSF|NCAA approved|FDA approved/i);
  if(path!=='/privacy')assert.doesNotMatch(html,/TNAT Co/);
  if(path==='/formula'){assert.match(html,/Fat-free ultra-filtered milk/i);assert.match(html,/Contains: Milk/i);assert.match(html,/not a final production label/);assert.equal((html.match(/class="ingredient-number mono"/g)||[]).length,6);assert.match(html,/230–235/);assert.match(html,/31–32 g/);assert.match(html,/21–22 g/);assert.match(html,/16 g/);assert.match(html,/pending testing/);assert.doesNotMatch(html,/208\.5|34 g|90 g|21 g|0\.5 g|1 g/);}
  if(path==='/about'){assert.match(html,/Founder &amp; owner/);assert.match(html,/trevor-natalie-7a0882299/);assert.match(html,/trevor-natalie-headshot/);assert.match(html,/trevor-hofstra-lacrosse/);}
  if(path==='/wholesale'){assert.match(html,/Team dietitian/);assert.match(html,/Estimated monthly volume/);}
  if(path==='/'){assert.match(html,/Honey was never/);assert.match(html,/1 full serving/);assert.match(html,/Packaging concept/);assert.match(html,/finished-product testing is pending/);assert.equal((html.match(/<section /g)||[]).length,4);}
 }
});
test('unconfigured waitlist is unavailable, never reports a saved signup',async()=>{
 const readiness=await worker.fetch(new Request('https://drinktnat.com/api/waitlist'),env,ctx);
 assert.deepEqual(await readiness.json(),{ready:false});
 const response=await worker.fetch(new Request('https://drinktnat.com/api/waitlist',{method:'POST',headers:{Origin:'https://drinktnat.com','Content-Type':'application/json'},body:JSON.stringify({email:'test@example.com',consent:true})}),env,ctx);
 assert.equal(response.status,503);assert.match((await response.json()).message,/not been saved/);
});
