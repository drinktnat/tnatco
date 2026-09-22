import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
import ts from 'typescript';
const source=await readFile(new URL('../worker/waitlist.ts',import.meta.url),'utf8');
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const {handleWaitlist}=await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));
const env={KIT_API_KEY:'test-only',KIT_FORM_ID:'123'};
function req(body={},origin='https://tnatco.com'){return new Request('https://tnatco.com/api/waitlist',{method:'POST',headers:{Origin:origin,'Content-Type':'application/json'},body:JSON.stringify(body)});}
test('rejects cross-origin, malformed email, missing consent, honeypot and large bodies without contacting Kit',async()=>{
 let calls=0;const send=async()=>{calls++;throw Error('unexpected');};
 assert.equal((await handleWaitlist(req({email:'test@example.com',consent:true},'https://other.example'),env,send)).status,403);
 for(const body of [{email:'bad',consent:true},{email:'test@example.com'},{email:'test@example.com',consent:true,website:'bot'}])assert.equal((await handleWaitlist(req(body),env,send)).status,400);
 assert.equal((await handleWaitlist(req({email:'x'.repeat(3000)}),env,send)).status,413);assert.equal(calls,0);
});
test('adds an inactive subscriber then joins the configured form without exposing credentials',async()=>{
 const calls=[];const send=async(url,init)=>{calls.push({url,init});return Response.json({subscriber:{id:1}});};
 const response=await handleWaitlist(req({email:' test@example.com ',consent:true}),env,send);
 assert.equal(response.status,200);assert.equal(calls.length,2);
 assert.equal(calls[0].url,'https://api.kit.com/v4/subscribers');assert.deepEqual(JSON.parse(calls[0].init.body),{email_address:'test@example.com',state:'inactive'});
 assert.equal(calls[1].url,'https://api.kit.com/v4/forms/123/subscribers');assert.equal(calls[1].init.headers['X-Kit-Api-Key'],'test-only');
 assert.doesNotMatch(await response.text(),/test-only/);
});
test('never confirms partial or failed Kit signup',async()=>{
 let count=0;const response=await handleWaitlist(req({email:'test@example.com',consent:true}),env,async()=>++count===1?Response.json({subscriber:{id:1}}):new Response('',{status:500}));
 assert.equal(response.status,502);assert.match((await response.json()).message,/couldn’t complete/);
 const offline=await handleWaitlist(req({email:'test@example.com',consent:true}),env,async()=>{throw Error('network');});assert.equal(offline.status,502);
});
