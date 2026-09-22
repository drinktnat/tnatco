"use client";
import { useEffect, useState, type FormEvent } from 'react';
export default function WaitlistForm({id}: {id:string}) {
 const [state,setState]=useState<'idle'|'sending'|'success'|'error'>('idle');
 const [message,setMessage]=useState('');
 const [ready,setReady]=useState(false);
 useEffect(()=>{let active=true;fetch('/api/waitlist').then(r=>r.json()).then(data=>{if(active){setReady(data.ready===true);if(!data.ready)setMessage('Waitlist signup opens soon. Check back for launch updates.');}}).catch(()=>{if(active)setMessage('Signup is temporarily unavailable. Please try again later.');});return()=>{active=false;};},[]);
 async function submit(event:FormEvent<HTMLFormElement>) {
  event.preventDefault(); if(state==='sending'||!ready) return;
  const form=event.currentTarget; const data=new FormData(form); setState('sending');setMessage('');
  try { const response=await fetch('/api/waitlist',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:data.get('email'),website:data.get('website'),consent:true})});const result=await response.json();if(!response.ok) throw new Error(result.message||'We couldn’t save your email. Please try again.');setState('success');setMessage(result.message);form.reset(); }
  catch(error){setState('error');setMessage(error instanceof Error?error.message:'We couldn’t connect. Please try again.');}
 }
 return <form className="waitlist-form" onSubmit={submit} aria-label="Launch waitlist"><label htmlFor={`${id}-email`} className="mono form-label">Be first to hear when it’s ready.</label><div className="email-row"><input id={`${id}-email`} type="email" name="email" autoComplete="email" maxLength={254} placeholder="Your email address" required disabled={!ready||state==='sending'||state==='success'} /><button type="submit" disabled={!ready||state==='sending'||state==='success'}>{state==='sending'?'Joining…':state==='success'?'Request received':'Join the waitlist'} <span aria-hidden="true">↗</span></button></div><div className="honeypot" aria-hidden="true"><label htmlFor={`${id}-website`}>Leave this blank</label><input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" /></div><p className="fine">By joining, you agree to receive TNAT launch emails. Unsubscribe anytime. <a href="/privacy">Privacy</a>.</p><p className={`form-status ${state}`} role="status" aria-live="polite">{message}</p><noscript><p>Please enable JavaScript to join, or email contact@tnatco.com.</p></noscript></form>;
}
