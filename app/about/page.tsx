const inquiryHref =
  "mailto:contact@tnatco.com?subject=Free%20homepage%20concept&body=Business%20name%3A%0AWebsite%20or%20social%20link%3A%0AWhat%20I%20want%20the%20website%20to%20help%20with%3A";

export default function AboutPage() {
  return (
    <main id="top" className="about-page">
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
          <a href="/about" aria-current="page">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="header-cta" href="/contact">Contact us</a>
      </header>

      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="kicker"><span /> About TNAT Co.</p>
          <h1>Built to help good businesses <em>get recognized.</em></h1>
          <p>TNAT Co. brings competitive standards, personal attention and a clear purpose to every project: helping local businesses look as professional online as they are in real life.</p>
          <div className="about-credentials" aria-label="Founder background">
            <span>Division I athlete</span>
            <span>Hofstra University</span>
            <span>South Florida</span>
          </div>
        </div>

        <div className="about-portrait-wrap">
          <figure className="about-portrait">
            <img src="/assets/trevor-natalie.jpeg" alt="Trevor Natalie, founder of TNAT Co." />
            <figcaption><span>Founder</span><strong>Trevor Natalie</strong></figcaption>
          </figure>
        </div>
      </section>

      <section className="founder-story section-shell">
        <div>
          <p className="section-tag">Meet the founder</p>
          <span className="story-number">01 / THE STORY</span>
        </div>
        <div className="founder-bio">
          <h2>Discipline on the field.<br /><em>Purpose in the work.</em></h2>
          <div className="founder-copy">
            <p>I’m Trevor Natalie, founder of TNAT Co. I’m a Division I athlete who attended Hofstra University on Long Island, New York. Competing at that level taught me discipline, preparation and the value of doing the small things correctly—lessons I bring to every client project.</p>
            <p>I started TNAT Co. to help business owners grow by giving them an online presence that reflects the quality of the work they already do. My goal is to build the strongest website possible for every client: something modern, easy to understand and designed to help the business get recognized.</p>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="mission-grid" aria-hidden="true" />
        <div className="mission-inner section-shell">
          <div className="mission-heading">
            <p className="section-tag light">Our mission</p>
            <span>02 / WHY WE EXIST</span>
          </div>
          <div className="mission-layout">
            <h2>We don’t just build websites.<br /><em>We build confidence.</em></h2>
            <div className="mission-copy">
              <p className="mission-lead">TNAT Co. exists to help local businesses build a modern online presence that earns trust before a customer ever walks through the door.</p>
              <p>When someone searches for a business online, everything they see should make them comfortable enough to call.</p>
              <strong>That is what TNAT sells.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta about-final-cta">
        <div className="cta-monogram" aria-hidden="true">
          <img src="/assets/tnat-co-monogram.png" alt="" />
        </div>
        <div className="final-copy">
          <p>READY TO BUILD SOMETHING PEOPLE TRUST?</p>
          <h2>Let’s make your business impossible to overlook.</h2>
          <a className="button button-white" href={inquiryHref}>Request a free homepage concept <span>↗</span></a>
          <a className="email-link" href="mailto:contact@tnatco.com">contact@tnatco.com</a>
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
