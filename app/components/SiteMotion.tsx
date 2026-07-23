"use client";

import { useEffect } from "react";

const motionGroups = [
  {
    selector:
      ".hero-copy > *, .about-hero-copy > *, .contact-intro > *, .privacy-hero-inner > *",
    variant: "motion-up",
    stagger: 6,
  },
  {
    selector:
      ".section-heading, .faq-title, .founder-story > *, .mission-heading, .mission-copy > *, .contact-label, .contact-prep-inner > *",
    variant: "motion-up",
    stagger: 4,
  },
  {
    selector:
      ".proof-strip > div, .service-card, .package-card, .steps article, .faq-list details, .contact-option, .privacy-sections > section",
    variant: "motion-up",
    stagger: 4,
  },
  {
    selector:
      ".industries > p, .industry-list, .package-add-on, .photo-copy > *, .ownership-inner > *, .final-copy > *, .contact-privacy-note",
    variant: "motion-up",
    stagger: 5,
  },
  {
    selector:
      ".photo-frame, .about-portrait, .leadership-profile, .service-request-form, .cta-monogram",
    variant: "motion-scale",
    stagger: 3,
  },
  {
    selector:
      ".outcomes > div, .ownership-badges > span, .content-option, .content-formats > span, .request-steps > div",
    variant: "motion-up",
    stagger: 4,
  },
] as const;

export default function SiteMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) return;

    const root = document.documentElement;
    const animatedElements = new Set<HTMLElement>();

    motionGroups.forEach(({ selector, variant, stagger }) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        if (animatedElements.has(element)) return;

        element.classList.add("motion-reveal", variant);
        element.style.setProperty(
          "--motion-delay",
          `${Math.min(index % stagger, stagger - 1) * 85}ms`,
        );
        animatedElements.add(element);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    animatedElements.forEach((element) => {
      const bounds = element.getBoundingClientRect();

      if (bounds.top < window.innerHeight * 0.94 && bounds.bottom > 0) {
        element.classList.add("is-visible");
      } else {
        observer.observe(element);
      }
    });

    root.classList.add("motion-enabled");

    const header = document.querySelector<HTMLElement>(".site-header");
    const updateScroll = () => {
      const scrollableHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const progress = Math.min(window.scrollY / scrollableHeight, 1);
      root.style.setProperty("--scroll-progress", String(progress));
      header?.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    const showcase = document.querySelector<HTMLElement>(".hero-showcase");
    const stage = showcase?.querySelector<HTMLElement>(".brand-stage");
    const canTilt = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    let tiltFrame = 0;

    const resetTilt = () => {
      if (!stage) return;
      stage.style.setProperty("--stage-rotate-x", "0deg");
      stage.style.setProperty("--stage-rotate-y", "0deg");
      stage.style.setProperty("--stage-shift-x", "0px");
      stage.style.setProperty("--stage-shift-y", "0px");
    };

    const updateTilt = (event: PointerEvent) => {
      if (!showcase || !stage) return;

      window.cancelAnimationFrame(tiltFrame);
      tiltFrame = window.requestAnimationFrame(() => {
        const bounds = showcase.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;

        stage.style.setProperty("--stage-rotate-x", `${y * -4}deg`);
        stage.style.setProperty("--stage-rotate-y", `${x * 5}deg`);
        stage.style.setProperty("--stage-shift-x", `${x * 7}px`);
        stage.style.setProperty("--stage-shift-y", `${y * 7}px`);
      });
    };

    if (canTilt && showcase && stage) {
      showcase.addEventListener("pointermove", updateTilt);
      showcase.addEventListener("pointerleave", resetTilt);
    }

    return () => {
      observer.disconnect();
      root.classList.remove("motion-enabled");
      root.style.removeProperty("--scroll-progress");
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      window.cancelAnimationFrame(tiltFrame);
      showcase?.removeEventListener("pointermove", updateTilt);
      showcase?.removeEventListener("pointerleave", resetTilt);
      resetTilt();
    };
  }, []);

  return null;
}
