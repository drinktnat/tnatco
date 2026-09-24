import './waitlist.test.mjs';
import './teams.test.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
const {default:worker}=await import('../dist/server/index.js');
const env={ASSETS:{fetch:async()=>new Response('Not found',{status:404})}};
const ctx={waitUntil(){},passThroughOnException(){}};
test('all product routes render with no legacy sales offers',async()=>{
 for(const path of ['/','/formula','/process','/about','/wholesale','/contact','/privacy']){
  const response=await worker.fetch(new Request('https://drinktnat.com'+path,{headers:{accept:'text/html'}}),env,ctx);
  assert.equal(response.status,200,path);const html=await response.text();
  assert.match(html,/TNAT/);assert.doesNotMatch(html,/199\/year hosting|Basic website|Look Professional\. Get Found|Reb M|Jupiter|whey isolate|coconut cream|sunflower lecithin|25g|150 calories|RYSE|Isopure|Drink TNAT|proposed|all nine essential amino acids|↗|NSF|NCAA approved|FDA approved/i);
  if(path==='/formula'){assert.match(html,/Raw Florida honey/i);assert.match(html,/Contains: milk/i);assert.match(html,/not a final production label/);assert.equal((html.match(/class="ingredient-number mono"/g)||[]).length,7);assert.doesNotMatch(html,/Amount \/ bottle|ingredient-amount/);assert.match(html,/10g added sugars/);assert.match(html,/295mg/);}
  if(path==='/about'){assert.match(html,/Founder &amp; owner/);assert.match(html,/trevor-natalie-7a0882299/);assert.match(html,/trevor-natalie-headshot/);assert.match(html,/trevor-hofstra-lacrosse/);}
  if(path==='/wholesale'){assert.match(html,/Team dietitian/);assert.match(html,/Estimated monthly volume/);}
  if(path==='/'){assert.match(html,/Fairlife Core Power/);assert.match(html,/The future of protein shakes/);assert.match(html,/Seven ingredients/);assert.match(html,/Not lab-tested/);assert.match(html,/Packaging concept/);}
 }
});
test('unconfigured waitlist is unavailable, never reports a saved signup',async()=>{
 const readiness=await worker.fetch(new Request('https://drinktnat.com/api/waitlist'),env,ctx);
 assert.deepEqual(await readiness.json(),{ready:false});
 const response=await worker.fetch(new Request('https://drinktnat.com/api/waitlist',{method:'POST',headers:{Origin:'https://drinktnat.com','Content-Type':'application/json'},body:JSON.stringify({email:'test@example.com',consent:true})}),env,ctx);
 assert.equal(response.status,503);assert.match((await response.json()).message,/not been saved/);
});
