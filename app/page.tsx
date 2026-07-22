const services = [
  {
    number: "01",
    title: "Custom websites",
    text: "A sharp, mobile-first website that makes your business look established and makes the next step obvious.",
  },
  {
    number: "02",
    title: "Local visibility",
    text: "Search-friendly pages, Google Business connection and the essentials that help nearby customers find you.",
  },
  {
    number: "03",
    title: "Photography & content",
    text: "Add an annual professional photo refresh to any plan so customers see the real people, work and proof behind the business.",
  },
  {
    number: "04",
    title: "Leads without chaos",
    text: "Quote requests, booking links, CRM-ready intake and clear notifications—built around how you already operate.",
  },
];

const packages = [
  {
    name: "Basic",
    price: "$499",
    cadence: "+ $99/year hosting",
    description: "For a business that simply needs to look legitimate online.",
    features: [
      "1–3 page custom website",
      "Your existing photos and branding",
      "Mobile-friendly design",
      "Basic search setup",
      "Contact form and click-to-call",
      "One revision round",
    ],
  },
  {
    name: "Professional",
    price: "$749",
    cadence: "+ $99/month",
    description: "For an owner who wants the website handled after launch.",
    featured: true,
    features: [
      "4–5 page custom website",
      "Local SEO foundations",
      "Google Business connection",
      "Visitor tracking",
      "Quote or booking integration",
      "Hosting, backups and updates",
      "Up to 30 minutes of edits monthly",
    ],
  },
  {
    name: "Premium",
    price: "$1,199",
    cadence: "+ $179/month",
    description: "The complete visual and lead-generation experience.",
    features: [
      "5–7 page custom website",
      "Full local SEO setup",
      "Google Business setup and management",
      "Analytics and Search Console",
      "Booking or quote workflow",
      "CRM lead dashboard",
      "Customer confirmations and alerts",
      "Newsletter signup integration",
      "Monthly performance report",
      "One hour of priority edits monthly",
    ],
  },
];

const steps = [
  ["01", "We learn the business", "A short conversation gives us the services, customers, voice and goal."],
  ["02", "We gather the proof", "Photos, reviews, service details and your best work become the building blocks."],
  ["03", "We build and refine", "You review a complete direction, then we make the agreed revisions."],
  ["04", "We launch and manage", "The site goes live on your domain, and ongoing clients send updates to us."],
];

const faqs = [
  ["Do I own my website and domain?", "Yes. Your domain and business accounts stay in your name. TNAT Co. receives only the access needed to build and manage the work."],
  ["Can you connect online booking?", "Yes. We can connect trusted booking platforms, quote forms and restaurant reservation services instead of rebuilding sensitive systems from scratch."],
  ["What if I already have photos?", "We can optimize strong existing photos for the Basic and Professional plans. Original professional photography is included only with Premium."],
  ["Can you update specials, photos or reviews?", "Yes. Professional and Premium include monthly edit time. Larger campaigns and frequent promotional emails can be added later."],
  ["Do you only work with marine businesses?", "No. TNAT Co. is built for local service businesses—from marine shops and mechanics to contractors, restaurants, salons and more."],
];

const inquiryHref =
  "mailto:contact@tnatco.com?subject=Free%20homepage%20concept&body=Business%20name%3A%0AWebsite%20or%20social%20link%3A%0AWhat%20I%20want%20the%20website%20to%20help%20with%3A";

export default function Home() {
  return (
    <main id="top">
      <div className="topline">
        <span>Stuart, Florida</span>
        <strong>Websites. Photos. Leads.</strong>
        <span>Built for local business</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="TNAT Co. home">
          <img src="/assets/tnat-co-horizontal.png" alt="TNAT Co." />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#process">Process</a>
          <a href="#faq">Questions</a>
        </nav>
        <a className="header-cta" href={inquiryHref}>Request a demo</a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="kicker"><span /> Custom online presence for owner-operated businesses</p>
          <h1>Look established.<br />Get found.<br /><em>Win the next call.</em></h1>
          <p className="hero-lede">
            TNAT Co. builds and manages sharp websites, local visibility, professional content and simple lead systems—so you can stay focused on the work customers pay you to do.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={inquiryHref}>Get a free homepage concept <span>↗</span></a>
            <a className="button button-light" href="#packages">See packages</a>
          </div>
          <p className="hero-note">No pressure. We show you what your business could look like first.</p>
        </div>

        <div className="hero-showcase" aria-label="Example of a TNAT Co. customer journey">
          <div className="showcase-label">From search to customer</div>
          <div className="search-card">
            <span className="search-icon">⌕</span>
            <div><small>LOCAL SEARCH</small><strong>Best service near me</strong></div>
            <span className="search-arrow">↗</span>
          </div>
          <div className="website-card">
            <div className="browser-bar"><i /><i /><i /><span>yourbusiness.com</span></div>
            <div className="website-preview">
              <small>LOCAL EXPERTS · TRUSTED WORK</small>
              <strong>Clear service.<br />Clear next step.</strong>
              <span>REQUEST A QUOTE →</span>
            </div>
          </div>
          <div className="lead-card">
            <span className="lead-check">✓</span>
            <div><small>NEW LEAD</small><strong>Quote request received</strong></div>
            <span>Now</span>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>
      </section>

      <section className="proof-strip" aria-label="TNAT Co. principles">
        <div><strong>01</strong><span>Built around your real business</span></div>
        <div><strong>02</strong><span>Your accounts stay yours</span></div>
        <div><strong>03</strong><span>Ongoing help after launch</span></div>
      </section>

      <section className="industries">
        <p>Made for the businesses that keep a community moving</p>
        <div className="industry-list">
          <span>Marine</span><i>✦</i><span>Contractors</span><i>✦</i><span>Restaurants</span><i>✦</i><span>Mechanics</span><i>✦</i><span>Home services</span><i>✦</i><span>Local experts</span>
        </div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-heading">
          <p className="section-tag">What we handle</p>
          <div>
            <h2>Your online presence,<br />under one roof.</h2>
            <p>You should not need five different vendors—or a technology degree—to look professional and respond to customers online.</p>
          </div>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <div className={`service-visual visual-${service.number}`} aria-hidden="true">
                {service.number === "01" && (
                  <div className="graphic-browser">
                    <div><i /><i /><i /><span>yourbusiness.com</span></div>
                    <b>Clear service.<br />Clear next step.</b>
                    <em>GO LIVE ↗</em>
                  </div>
                )}
                {service.number === "02" && (
                  <div className="graphic-local">
                    <span className="local-ring"><i /></span>
                    <b>FOUND NEARBY</b>
                    <em>LOCAL SEARCH · 3.2 MI</em>
                  </div>
                )}
                {service.number === "03" && (
                  <div className="graphic-camera">
                    <span><i /></span>
                    <b>REAL WORK</b>
                    <em>ANNUAL CONTENT REFRESH</em>
                  </div>
                )}
                {service.number === "04" && (
                  <div className="graphic-leads">
                    <span><i>1</i><b>NEW VISITOR</b></span>
                    <span><i>2</i><b>QUOTE REQUEST</b></span>
                    <span><i>✓</i><b>NEW LEAD</b></span>
                  </div>
                )}
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statement-grid" aria-hidden="true" />
        <div className="statement-copy section-shell">
          <p className="section-tag light">The standard</p>
          <h2>Your website should do the explaining while <em>you do the work.</em></h2>
          <div className="outcomes">
            <div><strong>Be trusted</strong><span>Look credible before the customer ever calls.</span></div>
            <div><strong>Be found</strong><span>Give local search engines clear information to understand.</span></div>
            <div><strong>Be contacted</strong><span>Turn attention into calls, quotes and appointments.</span></div>
          </div>
        </div>
      </section>

      <section className="packages section-shell" id="packages">
        <div className="section-heading package-heading">
          <p className="section-tag">Simple packages</p>
          <div>
            <h2>Start where the business is now.</h2>
            <p>Clear setup pricing. Practical ongoing support. No giant agency contract.</p>
          </div>
        </div>
        <div className="package-grid">
          {packages.map((plan) => (
            <article className={`package-card${plan.featured ? " featured" : ""}`} key={plan.name}>
              {plan.featured && <div className="popular">Most popular</div>}
              <div className="package-top">
                <span>{plan.name}</span>
                <p>{plan.description}</p>
              </div>
              <div className="price"><strong>{plan.price}</strong><span>setup</span></div>
              <div className="cadence">{plan.cadence}</div>
              <ul>
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a href={inquiryHref}>Choose {plan.name} <span>↗</span></a>
            </article>
          ))}
        </div>
        <div className="package-add-on">
          <div><span>Optional annual add-on</span><strong>Photo Refresh · $299</strong></div>
          <p>Available with any package: a 60-minute local shoot, 20 edited photos and one website image refresh.</p>
          <a href="#photo-add-on">See the add-on ↓</a>
        </div>
        <p className="package-note">Domains, advertising and third-party software fees are billed separately when needed. Final scope is confirmed before work begins.</p>
      </section>

      <section className="photo-feature" id="photo-add-on">
        <div className="photo-collage">
          <figure className="photo-frame frame-one"><img src="/assets/tnat-client-photo-01.jpg" alt="Marine professional detailing a boat" /><span>REAL PEOPLE</span></figure>
          <figure className="photo-frame frame-two"><img src="/assets/tnat-client-photo-02.jpg" alt="Marine mechanic servicing an outboard motor" /><span>REAL WORK</span></figure>
          <figure className="photo-frame frame-three"><img src="/assets/tnat-client-photo-03.jpg" alt="Close-up of professional ceramic coating work" /><span>REAL PROOF</span></figure>
          <div className="focus-corners" />
        </div>
        <div className="photo-copy">
          <p className="section-tag light">Optional with every package</p>
          <h2>Fresh proof that your business is the real deal.</h2>
          <p>Add a professional content refresh when you need it. We capture the people, process, space and details customers want to see, then update the strongest images across your website.</p>
          <div className="photo-price"><span>Annual Photo Refresh</span><strong>$299</strong><em>per session</em></div>
          <div className="photo-stats">
            <div><strong>60</strong><span>minute shoot</span></div>
            <div><strong>20</strong><span>edited photos</span></div>
            <div><strong>1</strong><span>website refresh</span></div>
          </div>
          <p className="photo-footnote">Available in the local service area. Short-form video can be quoted separately.</p>
        </div>
      </section>

      <section className="process" id="process">
        <div className="process-grid" aria-hidden="true" />
        <div className="process-inner section-shell">
          <div className="section-heading">
            <p className="section-tag light">The TNAT method</p>
            <div>
              <h2>From first conversation to live website—without the usual mess.</h2>
              <p>Four clear milestones. One accountable partner. You always know what is happening and what we need from you.</p>
            </div>
          </div>
          <div className="steps">
            {steps.map(([number, title, text], index) => (
              <article key={number}>
                <div className="step-top"><span>{number}</span><i>{index === steps.length - 1 ? "✓" : "→"}</i></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <em>{index === steps.length - 1 ? "LAUNCH" : "NEXT STEP"}</em>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ownership">
        <div className="ownership-inner section-shell">
          <p className="section-tag light">Built on trust</p>
          <h2>Your domain. Your accounts. Your business.</h2>
          <p>We build the system and manage the details, but the important business assets stay in your name. You are never trapped because someone else owns your online presence.</p>
          <div className="ownership-badges">
            <span>✓ Client-owned domain</span>
            <span>✓ Secure managed platforms</span>
            <span>✓ Clear monthly scope</span>
          </div>
        </div>
      </section>

      <section className="faq section-shell" id="faq">
        <div className="faq-title">
          <p className="section-tag">Common questions</p>
          <h2>Before we work together.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<i>+</i></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-monogram" aria-hidden="true">
          <img src="/assets/tnat-co-monogram.png" alt="" />
        </div>
        <div className="final-copy">
          <p>YOUR NEXT CUSTOMER IS ALREADY SEARCHING.</p>
          <h2>Let’s make sure they find something worth choosing.</h2>
          <a className="button button-white" href={inquiryHref}>Request a free homepage concept <span>↗</span></a>
          <a className="email-link" href="mailto:contact@tnatco.com">contact@tnatco.com</a>
        </div>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="#top" aria-label="Back to top">
          <img src="/assets/tnat-co-horizontal.png" alt="TNAT Co." />
        </a>
        <p>Custom websites and online presence for local business.</p>
        <div>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#process">Process</a>
          <a href="mailto:contact@tnatco.com">Contact</a>
        </div>
        <span>© 2026 TNAT Co. LLC · Stuart, Florida</span>
      </footer>
    </main>
  );
}
