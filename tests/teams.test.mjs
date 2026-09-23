import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
import ts from 'typescript';
import {DatabaseSync} from 'node:sqlite';
const source=await readFile(new URL('../worker/teams.ts',import.meta.url),'utf8');
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const {handleTeams}=await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));
const body={name:'Test Coach',organization:'Test College',role:'Coach',monthlyVolume:'100–499',email:' COACH@EXAMPLE.COM ',consent:true};
const req=(data=body,origin='https://drinktnat.com')=>new Request('https://drinktnat.com/api/teams',{method:'POST',headers:{Origin:origin,'Content-Type':'application/json'},body:JSON.stringify(data)});
test('team inquiry validates fields, stores monthly volume, and never confirms failed storage',async()=>{
 const db=new DatabaseSync(':memory:');db.exec(await readFile(new URL('../drizzle/0001_demonic_fenris.sql',import.meta.url),'utf8'));
 const env={DB:{prepare(sql){return{bind(...values){return{async run(){return db.prepare(sql).run(...values)}}}}}}};
 try{
  assert.equal((await handleTeams(req(body,'https://other.example'),env)).status,403);
  for(const field of ['name','organization','role','monthlyVolume','email'])assert.equal((await handleTeams(req({...body,[field]:''}),env)).status,400);
  assert.equal((await handleTeams(req({...body,consent:false}),env)).status,400);
  assert.equal((await handleTeams(req({...body,website:'bot'}),env)).status,400);
  assert.equal(db.prepare('SELECT count(*) AS n FROM team_inquiries').get().n,0);
  assert.equal((await handleTeams(req(),env)).status,200);
  const row=db.prepare('SELECT * FROM team_inquiries').get();assert.equal(row.monthly_volume,'100–499');assert.equal(row.email,'coach@example.com');assert.equal(row.consent,1);
  const response=await handleTeams(req(),{DB:{prepare(){throw Error('offline')}}});assert.equal(response.status,503);assert.match((await response.json()).message,/couldn’t save/);
 }finally{db.close()}
});
