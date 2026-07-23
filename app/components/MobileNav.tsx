"use client";

import { useEffect, useState } from "react";

const mobileLinks = [
  ["Services", "/#services"],
  ["Packages", "/#packages"],
  ["Process", "/#process"],
  ["Questions", "/#faq"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className={`mobile-nav${open ? " is-open" : ""}`}>
      <button
        className="mobile-menu-button"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="mobile-menu-panel" id="mobile-navigation-panel">
          <div className="mobile-menu-heading">
            <span>TNAT CO. / MENU</span>
            <strong>Where would you like to go?</strong>
          </div>
          <nav aria-label="Mobile navigation">
            {mobileLinks.map(([label, href], index) => (
              <a href={href} key={label} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
                <i aria-hidden="true">↗</i>
              </a>
            ))}
          </nav>
          <div className="mobile-menu-contact">
            <a href="tel:+17724867605">Call or text: (772) 486-7605</a>
            <a href="mailto:contact@tnatco.com">contact@tnatco.com</a>
          </div>
        </div>
      )}
    </div>
  );
}
