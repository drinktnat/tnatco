const emailHref =
  "mailto:contact@tnatco.com?subject=Website%20inquiry&body=Business%20name%3A%0ACurrent%20website%20or%20social%20link%3A%0AWhat%20I%20want%20help%20with%3A";

export default function ContactPage() {
  return (
    <main id="top" className="contact-page">
      <div className="topline">
        <span>South Florida</span>
        <strong>Look professional. Get found. Stay busy.</strong>
        <span>Built for local businesses</span>
      </div>

      <header className="site-header">
        <a className="brand" href="/" aria-label="TNAT Co. home">
          <img src="/assets/tnat-co-horizontal.png" alt="TNAT Co." />
        </a>
        <nav aria-label="Primary navigation">
          <a href="/#services">Services</a>
          <a href="/#packages">Packages</a>
          <a href="/#process">Process</a>
          <a href="/#faq">Questions</a>
          <a href="/about">About</a>
          <a href="/contact" aria-current="page">Contact</a>
        </nav>
        <a className="header-cta" href="tel:+17724867605">Call now</a>
      </header>

      <section className="contact-hero">
        <div className="contact-intro section-shell">
          <p className="kicker"><span /> Let’s talk about your business</p>
          <h1>Ready to turn more searches into <em>customers?</em></h1>
          <p>Tell us where your business is today and what you want the website to accomplish. We’ll help you choose a clear next step.</p>
        </div>
      </section>

      <section className="contact-details section-shell">
        <div className="contact-label">
          <p className="section-tag">Contact TNAT Co.</p>
          <span>South Florida</span>
        </div>
        <div className="contact-options">
          <a className="contact-option" href="tel:+17724867605">
            <span>01 / PHONE</span>
            <strong>(772) 486-7605</strong>
            <p>Call or text us directly.</p>
            <i aria-hidden="true">↗</i>
          </a>
          <a className="contact-option" href={emailHref}>
            <span>02 / EMAIL</span>
            <strong>contact@tnatco.com</strong>
            <p>Send your business name, current online presence and what you want help with.</p>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </section>

      <section className="contact-prep">
        <div className="section-shell contact-prep-inner">
          <p className="section-tag light">A good place to start</p>
          <h2>You don’t need everything figured out before you reach out.</h2>
          <div className="contact-prep-list">
            <span>01</span><p>Your business name and service area</p>
            <span>02</span><p>Your current website or social media, if you have one</p>
            <span>03</span><p>What you want customers to do: call, book, visit or request a quote</p>
          </div>
          <a className="button button-white" href={emailHref}>Start the conversation <span>↗</span></a>
        </div>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="/" aria-label="TNAT Co. home">
          <img src="/assets/tnat-co-horizontal.png" alt="TNAT Co." />
        </a>
        <p>Custom websites and online presence for local businesses.</p>
        <div>
          <a href="/#services">Services</a>
          <a href="/#packages">Packages</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <span>© 2026 TNAT Co. LLC · South Florida</span>
      </footer>
    </main>
  );
}
