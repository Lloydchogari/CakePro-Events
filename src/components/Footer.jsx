import React from "react";
import "./Footer.css";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Flavours", href: "#flavours" },
  { label: "Training", href: "#classes" },
  { label: "Decor", href: "#decor-cta" },
  { label: "Testimonials", href: "#testimonials" },
];

const SOCIALS = [
  {
    label: "Instagram",
    handle: "cake_pro_events",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "Cake Pro & Events",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: "+263 77 326 0535",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-bar" aria-hidden="true" />

      <div className="footer__inner">

        {/* ── Brand column ── */}
        <div className="footer__brand">
          <span className="footer__logo">Cake Pro Events</span>
          <p className="footer__tagline">
            Crafting extraordinary cakes &amp; memories from our studio in Harare, since 2018.
          </p>
          {/* Logo image */}
          <div className="footer__logo-img-wrap">
            <img src="/logo.jpeg" alt="Cake Pro Events logo" className="footer__logo-img" />
          </div>
        </div>

        {/* ── Navigation column ── */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Navigation</h4>
          <ul className="footer__links">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="footer__link">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact column ── */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Get In Touch</h4>
          <ul className="footer__contact-list">
            <li>
              <span className="footer__contact-label">Phone</span>
              <a href="tel:+263771234567" className="footer__link">+263 77 326 0535</a>
            </li>
            <li>
              <span className="footer__contact-label">Email</span>
              <a href="mailto:hello@celeste.co.zw" className="footer__link">cakeproevents@gmail.com</a>
            </li>
            <li>
              <span className="footer__contact-label">Studio</span>
              <span className="footer__contact-value">Harare, Zimbabwe</span>
            </li>
            <li>
              <span className="footer__contact-label">Hours</span>
              <span className="footer__contact-value">Mon – Sat, 8am – 6pm</span>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Social bar ── */}
      <div className="footer__social-bar">
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} className="footer__social-pill" aria-label={s.label}>
            <span className="footer__social-icon">{s.icon}</span>
            <span className="footer__social-text">{s.handle}</span>
          </a>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <span className="footer__copy">© {new Date().getFullYear()} Cakes you'll ❤️. All rights reserved.</span>
      </div>
    </footer>
  );
}