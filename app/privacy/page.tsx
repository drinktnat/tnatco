export default function PrivacyPage() {
  return (
    <main id="top" className="privacy-page">
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
          <a href="/contact">Contact</a>
        </nav>
        <a className="header-cta" href="/contact">Contact us</a>
      </header>

      <section className="privacy-hero">
        <div className="section-shell privacy-hero-inner">
          <p className="kicker"><span /> Clear, responsible data practices</p>
          <h1>Privacy without the <em>fine-print maze.</em></h1>
          <div className="privacy-summary">
            <p>TNAT Co. collects only the information needed to respond to inquiries and provide requested services.</p>
            <div><span>Effective</span><strong>July 22, 2026</strong></div>
          </div>
        </div>
      </section>

      <section className="privacy-content section-shell">
        <aside className="privacy-index">
          <p className="section-tag">Privacy Policy</p>
          <a href="#information">Information</a>
          <a href="#use">How we use it</a>
          <a href="#sharing">Sharing</a>
          <a href="#security">Security</a>
          <a href="#choices">Your choices</a>
          <a href="#contact-privacy">Contact</a>
        </aside>

        <div className="privacy-sections">
          <section id="introduction">
            <span>01</span>
            <h2>Overview</h2>
            <p>This Privacy Policy explains how TNAT Co. LLC (“TNAT Co.,” “we,” “us” or “our”) handles information when you visit our website, call or text us, email us, or work with us. By using the website, you acknowledge the practices described here.</p>
          </section>

          <section id="information">
            <span>02</span>
            <h2>Information we collect</h2>
            <h3>Information you choose to provide</h3>
            <p>When you contact us, you may provide your name, business name, phone number, email address, website or social media links, service interests, project details and any other information included in your message.</p>
            <h3>Basic technical information</h3>
            <p>Our hosting and security providers may automatically process limited technical information such as an IP address, browser type, device type, pages requested, timestamps and similar diagnostic data needed to deliver, protect and maintain the website.</p>
            <h3>Cookies and advertising</h3>
            <p>The website may use essential technologies required for hosting, security and core operation. TNAT Co. does not currently use advertising pixels or sell personal information for targeted advertising.</p>
          </section>

          <section id="use">
            <span>03</span>
            <h2>How we use information</h2>
            <p>We use information to respond to inquiries, communicate about projects, prepare proposals, provide and improve services, maintain and protect the website, keep business records, prevent misuse and comply with legal obligations.</p>
          </section>

          <section id="sharing">
            <span>04</span>
            <h2>When information may be shared</h2>
            <p>We do not sell your personal information. We may share information with service providers that help us operate our website, email and business systems; when required by law or needed to protect rights and safety; or as part of a business transfer. Providers receive only the access reasonably needed to perform their services.</p>
          </section>

          <section id="retention">
            <span>05</span>
            <h2>How long we keep information</h2>
            <p>We retain information only as long as reasonably necessary for the purposes described in this policy, including responding to you, providing services, maintaining business and tax records, resolving disputes and meeting legal obligations. When information is no longer needed, we take reasonable steps to delete or securely dispose of it.</p>
          </section>

          <section id="security">
            <span>06</span>
            <h2>Security</h2>
            <p>We use reasonable administrative and technical safeguards appropriate to the information we handle. The website is delivered over HTTPS, and access to business systems is limited to people and providers who need it. No internet transmission or storage system can be guaranteed completely secure, so please do not send Social Security numbers, payment-card details, medical information or other sensitive data through ordinary email or text.</p>
          </section>

          <section id="choices">
            <span>07</span>
            <h2>Your choices</h2>
            <p>You may ask us to review, correct or delete personal information we hold about you, subject to applicable legal and recordkeeping requirements. You may also ask a privacy question or request that we stop nonessential communications.</p>
          </section>

          <section id="children">
            <span>08</span>
            <h2>Children’s privacy</h2>
            <p>Our website and services are intended for businesses and are not directed to children under 13. We do not knowingly collect personal information from children under 13 through this website.</p>
          </section>

          <section id="changes">
            <span>09</span>
            <h2>Changes to this policy</h2>
            <p>We may update this policy as our website, services or legal obligations change. The effective date at the top of the page will show when the latest version took effect.</p>
          </section>

          <section id="contact-privacy" className="privacy-contact">
            <span>10</span>
            <h2>Contact TNAT Co.</h2>
            <p>For privacy questions or requests, contact us using either option below.</p>
            <div>
              <a href="mailto:contact@tnatco.com">contact@tnatco.com ↗</a>
              <a href="tel:+17724867605">(772) 486-7605 ↗</a>
            </div>
          </section>
        </div>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="/" aria-label="TNAT Co. home">
          <img src="/assets/tnat-co-horizontal.png" alt="TNAT Co." />
        </a>
        <p>Custom websites and online presence for local businesses.</p>
        <div>
          <a href="/#services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
        </div>
        <span>© 2026 TNAT Co. LLC · South Florida</span>
      </footer>
    </main>
  );
}
