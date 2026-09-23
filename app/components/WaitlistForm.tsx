"use client";
import { useState, type FormEvent } from 'react';
export default function WaitlistForm({id}: {id:string}) {
 const [state,setState]=useState<'idle'|'sending'|'success'|'error'>('idle');
 const [message,setMessage]=useState('');
 async function submit(event:FormEvent<HTMLFormElement>) {
  event.preventDefault(); if(state==='sending'||state==='success') return;
  const form=event.currentTarget; const data=new FormData(form); setState('sending');setMessage('');
  try { const response=await fetch('/api/waitlist',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:data.get('email'),website:data.get('website'),consent:true,source:id})});const result=await response.json() as {message?:string};if(!response.ok) throw new Error(result.message||'We couldn’t save your email. Please try again.');setState('success');setMessage(result.message||"Your submission is saved.");form.reset(); }
  catch(error){setState('error');setMessage(error instanceof Error?error.message:'We couldn’t connect. Please try again.');}
 }
 return <form className="waitlist-form" onSubmit={submit} aria-label="Launch waitlist"><label htmlFor={`${id}-email`} className="mono form-label">Be first to hear when it’s ready.</label><div className="email-row"><input id={`${id}-email`} type="email" name="email" autoComplete="email" maxLength={254} placeholder="Your email address" required disabled={state==='sending'||state==='success'} /><button type="submit" disabled={state==='sending'||state==='success'}>{state==='sending'?'Joining…':state==='success'?"You're on the list.":'Join the waitlist'} <span className="chevron" aria-hidden="true"/></button></div><div className="honeypot" aria-hidden="true"><label htmlFor={`${id}-website`}>Leave this blank</label><input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" /></div><p className="fine">By joining, you agree to receive TNAT launch emails. Unsubscribe anytime. <a href="/privacy">Privacy</a>.</p><p className={`form-status ${state}`} role="status" aria-live="polite">{message}</p><noscript><p>Please enable JavaScript to join, or email contact@drinktnat.com.</p></noscript></form>;
}
