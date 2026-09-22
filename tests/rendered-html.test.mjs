import './waitlist.test.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
const {default:worker}=await import('../dist/server/index.js');
const env={ASSETS:{fetch:async()=>new Response('Not found',{status:404})}};
const ctx={waitUntil(){},passThroughOnException(){}};
test('all product routes render with no legacy sales offers',async()=>{
 for(const path of ['/','/formula','/process','/about','/wholesale','/contact','/privacy']){
  const response=await worker.fetch(new Request('https://tnatco.com'+path,{headers:{accept:'text/html'}}),env,ctx);
  assert.equal(response.status,200,path);const html=await response.text();
  assert.match(html,/TNAT/);assert.doesNotMatch(html,/199\/year hosting|Basic website|Look Professional\. Get Found|stevia|Reb M/i);
  if(path==='/formula'){assert.match(html,/Monk fruit extract/i);assert.match(html,/CONTAINS: MILK/);assert.match(html,/not a final production label/);}
  if(path==='/'){assert.match(html,/Seven ingredients/);assert.match(html,/Not lab-tested/);assert.match(html,/Packaging concept/);}
 }
});
test('unconfigured waitlist is unavailable, never reports a saved signup',async()=>{
 const readiness=await worker.fetch(new Request('https://tnatco.com/api/waitlist'),env,ctx);
 assert.deepEqual(await readiness.json(),{ready:false});
 const response=await worker.fetch(new Request('https://tnatco.com/api/waitlist',{method:'POST',headers:{Origin:'https://tnatco.com','Content-Type':'application/json'},body:JSON.stringify({email:'test@example.com',consent:true})}),env,ctx);
 assert.equal(response.status,503);assert.match((await response.json()).message,/not been saved/);
});
