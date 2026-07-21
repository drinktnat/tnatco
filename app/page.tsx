"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    number: "01",
    title: "Fiberglass & gelcoat",
    text: "Structural fiberglass repair, finish restoration and detail-driven gelcoat work for a clean, durable result.",
  },
  {
    number: "02",
    title: "Bottom painting",
    text: "Surface preparation and antifouling applications designed around how and where your boat is used.",
  },
  {
    number: "03",
    title: "Engine service",
    text: "Maintenance and repair for outboard engines, with publicly listed specialization in Tohatsu and service for all outboard brands.",
  },
  {
    number: "04",
    title: "Marine electronics",
    text: "Repair and installation for navigation, audio and onboard electronics, including Garmin, Fusion, Wet Sounds and Simrad systems.",
  },
  {
    number: "05",
    title: "Custom fabrication",
    text: "Purpose-built marine components and structural improvements shaped around the vessel and the owner’s needs.",
  },
  {
    number: "06",
    title: "Fuel tanks & livewells",
    text: "Repair and custom installation work for fuel tanks and livewells, planned for fit, function and reliable time on the water.",
  },
];

const reviews = [
  {
    quote: "Great attention to detail… very communicative and transparent with pricing.",
    name: "Zak Rockwell",
    detail: "Google review · excerpt",
  },
  {
    quote: "Beautiful work, speedy time, honest and affordable pricing.",
    name: "Lisa Noakes",
    detail: "Google review · excerpt",
  },
];

export default function Home() {
  const [sent, setSent] = useState(false);

  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <div className="demo-bar">
        <span>Unofficial redesign concept</span>
        <p>Not commissioned by or affiliated with Scallywags Boatworks LLC.</p>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Scallywags Boatworks concept home">
          <span className="brand-mark">S</span>
          <span className="brand-copy">
            <strong>Scallywags</strong>
            <small>Boatworks · Stuart, Florida</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Approach</a>
          <a href="#reviews">Reviews</a>
        </nav>
        <a className="header-call" href="tel:+17079008139">
          <span>Call or text</span>
          707-900-8139
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Marine repair & restoration · Treasure Coast</p>
          <h1>Craftsmanship that gets you back on the water.</h1>
          <p className="hero-lede">
            Fiberglass, gelcoat, bottom paint, engine service, electronics and custom marine work—all under one Stuart roof.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#request">Request service</a>
            <a className="button button-ghost" href="tel:+17079008139">Call 707-900-8139</a>
          </div>
        </div>
        <div className="hero-proof">
          <div><strong>4.7</strong><span>Public rating</span></div>
          <div><strong>13</strong><span>Public reviews</span></div>
          <div><strong>2019</strong><span>Florida LLC filed</span></div>
        </div>
      </section>

      <section className="intro section-shell">
        <p className="section-tag">Full-service boatworks</p>
        <div>
          <h2>One shop. From the hull up.</h2>
          <p>
            The strongest marine-service sites make the next step obvious. This concept organizes Scallywags’ publicly listed capabilities into a clear path from problem to conversation.
          </p>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-shell services-heading">
          <p className="section-tag light">Capabilities</p>
          <h2>Built for the work boats actually need.</h2>
        </div>
        <div className="service-grid section-shell">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section-shell" id="work">
        <div className="approach-visual">
          <div className="hull-line" />
          <p>Repair with a restoration mindset.</p>
        </div>
        <div className="approach-copy">
          <p className="section-tag">The Scallywags approach</p>
          <h2>Clear answers before the work begins.</h2>
          <div className="steps">
            <div><span>01</span><p><strong>Tell us about the boat.</strong> Share the vessel, location and issue so the right conversation starts quickly.</p></div>
            <div><span>02</span><p><strong>Review the scope.</strong> Discuss the repair path, materials, timing and expectations before authorizing work.</p></div>
            <div><span>03</span><p><strong>Get back to boating.</strong> Receive the finished vessel with the completed work explained clearly.</p></div>
          </div>
        </div>
      </section>

      <section className="review-section" id="reviews">
        <div className="section-shell review-layout">
          <div>
            <p className="section-tag light">Customer perspective</p>
            <h2>Known for detail, communication and quality work.</h2>
            <a className="text-link" href="https://reviews.birdeye.com/scallywags-boatworks-llc-170663960857348" target="_blank" rel="noreferrer">
              View public review source ↗
            </a>
          </div>
          <div className="review-cards">
            {reviews.map((review) => (
              <blockquote key={review.name}>
                <div className="stars" aria-label="Five stars">★★★★★</div>
                <p>“{review.quote}”</p>
                <footer><strong>{review.name}</strong><span>{review.detail}</span></footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="request section-shell" id="request">
        <div className="request-copy">
          <p className="section-tag">Start the conversation</p>
          <h2>What does your boat need?</h2>
          <p>Give the shop the essentials up front so the first call can focus on the repair—not basic intake.</p>
          <div className="location-card">
            <span>Shop</span>
            <strong>2660 SE Fairmont St<br />Stuart, FL 34997</strong>
            <a href="https://maps.google.com/?q=2660+SE+Fairmont+St+Stuart+FL+34997" target="_blank" rel="noreferrer">Open map ↗</a>
          </div>
        </div>

        <form onSubmit={submitDemo}>
          <div className="form-note">Demo form only · no information is transmitted</div>
          <div className="field-row">
            <label>Name<input required name="name" placeholder="Your name" /></label>
            <label>Phone<input required name="phone" type="tel" placeholder="(772) 555-0123" /></label>
          </div>
          <div className="field-row">
            <label>Boat make & model<input name="boat" placeholder="Example: 24' Pathfinder" /></label>
            <label>Engine<input name="engine" placeholder="Example: Tohatsu 250" /></label>
          </div>
          <label>Service needed
            <select name="service" defaultValue="">
              <option value="" disabled>Select a service</option>
              <option>Fiberglass or gelcoat</option>
              <option>Bottom painting</option>
              <option>Engine service</option>
              <option>Marine electronics</option>
              <option>Custom fabrication</option>
              <option>Fuel tank or livewell</option>
            </select>
          </label>
          <label>Tell us what is happening<textarea name="details" rows={4} placeholder="Describe the issue, timing and where the boat is located." /></label>
          <button className="button button-dark" type="submit">Preview request flow</button>
          {sent && <p className="success" role="status">Demo complete. A live version would securely deliver this request to the shop.</p>}
        </form>
      </section>

      <footer className="footer">
        <div className="footer-main section-shell">
          <div className="footer-brand">
            <span className="brand-mark inverse">S</span>
            <div><strong>Scallywags Boatworks</strong><p>Boat repair and restoration in Stuart, Florida.</p></div>
          </div>
          <a href="tel:+17079008139">707-900-8139</a>
        </div>
        <div className="footer-bottom section-shell">
          <p>Unofficial portfolio concept. Business details should be confirmed by the owner before publication.</p>
          <p>Public information accessed July 2026.</p>
        </div>
      </footer>
    </main>
  );
}
