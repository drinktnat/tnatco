"use client";

import { FormEvent, useEffect, useState } from "react";

const serviceOptions = [
  "Basic website",
  "Professional website",
  "Professional website + photo shoot",
  "Premium website",
  "Premium website + photo shoot",
  "Photo + video content only",
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ServiceRequestForm() {
  const [selectedService, setSelectedService] = useState("Basic website");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const requestedService = new URLSearchParams(window.location.search).get("service");
    if (requestedService) setSelectedService(requestedService);
  }, []);

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website_check")) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@tnatco.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...payload,
          _subject: `New TNAT Co. service request: ${selectedService}`,
          _template: "table",
          _url: window.location.href,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || result.success === false) {
        throw new Error(result.message || "The request could not be delivered.");
      }

      setStatus("success");
      form.reset();
      setSelectedService("Basic website");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="request-success" role="status">
        <span aria-hidden="true">✓</span>
        <p>REQUEST RECEIVED</p>
        <h2>Thank you. We’ll be in touch shortly.</h2>
        <p>TNAT Co. will review your information and reach out using your preferred contact method.</p>
        <button type="button" onClick={() => setStatus("idle")}>Send another request</button>
      </div>
    );
  }

  return (
    <form className="service-request-form" onSubmit={submitRequest}>
      <div className="form-heading">
        <span>01 / YOUR INFORMATION</span>
        <p>Fields marked with an asterisk are required.</p>
      </div>

      <div className="form-grid">
        <label>
          <span>Your name *</span>
          <input type="text" name="Name" autoComplete="name" required placeholder="First and last name" />
        </label>
        <label>
          <span>Business name *</span>
          <input type="text" name="Business name" autoComplete="organization" required placeholder="Your business" />
        </label>
        <label>
          <span>Email address *</span>
          <input type="email" name="Email" autoComplete="email" required placeholder="you@business.com" />
        </label>
        <label>
          <span>Phone number</span>
          <input type="tel" name="Phone" autoComplete="tel" placeholder="(000) 000-0000" />
        </label>
      </div>

      <div className="form-heading form-heading-second">
        <span>02 / YOUR PROJECT</span>
        <p>A few details help us prepare before we reach out.</p>
      </div>

      <div className="form-grid">
        <label>
          <span>Service you’re interested in *</span>
          <select name="Service requested" required value={selectedService} onChange={(event) => setSelectedService(event.target.value)}>
            {!serviceOptions.includes(selectedService) && <option value={selectedService}>{selectedService}</option>}
            {serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>Best way to reach you *</span>
          <select name="Preferred contact method" required defaultValue="Phone or text">
            <option>Phone or text</option>
            <option>Email</option>
            <option>Either works</option>
          </select>
        </label>
        <label>
          <span>Current website or social page</span>
          <input type="url" name="Current website or social page" inputMode="url" placeholder="https://" />
        </label>
        <label>
          <span>When would you like to start?</span>
          <select name="Desired timeline" defaultValue="Within 1 week">
            <option>Within 1 week</option>
            <option>Within 2 weeks</option>
            <option>Within 1 month</option>
            <option>Still exploring options</option>
          </select>
        </label>
        <label className="form-wide">
          <span>What would you like help with? *</span>
          <textarea name="Project details" required rows={6} placeholder="Tell us what your business does, what you need, and what you want customers to do on your website." />
        </label>
      </div>

      <label className="video-option">
        <input type="checkbox" name="Include video content" value="Yes — discuss short-form or long-form video" />
        <span className="video-option-check" aria-hidden="true">✓</span>
        <span>
          <strong>Include video content in my quote</strong>
          <small>Select this if you may want short-form or long-form video. We’ll discuss the style, length and pricing with you.</small>
        </span>
        <em>OPTIONAL</em>
      </label>

      <label className="form-consent">
        <input type="checkbox" name="Permission to contact" value="Yes" required />
        <span>I agree that TNAT Co. may use this information to respond to my request. *</span>
      </label>

      <label className="form-honeypot" aria-hidden="true">
        Leave this field empty
        <input type="text" name="website_check" tabIndex={-1} autoComplete="off" />
      </label>

      {status === "error" && <p className="form-error" role="alert">{errorMessage} You can also call us at (772) 486-7605.</p>}

      <div className="form-submit-row">
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending request…" : "Send service request"}
          <span aria-hidden="true">↗</span>
        </button>
        <p>Securely delivered to TNAT Co. We do not sell your information.</p>
      </div>
    </form>
  );
}
