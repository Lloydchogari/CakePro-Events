import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const darkSections = document.querySelectorAll('[data-theme="dark"]');
    if (!darkSections.length) return;
    const check = () => {
      const mid = (navRef.current?.offsetHeight || 70) / 2;
      const over = [...darkSections].some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= mid && r.bottom >= mid;
      });
      setIsLight(over);
    };
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? "scrolled" : ""} ${isLight ? "navbar--light" : ""}`}
    >
      <div className="nav-container">

        {/* LEFT — Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <img src="/public/logo.jpeg" alt="Cake Logo" />
        </a>

        {/* CENTRE — Links (desktop only, no order btn here) */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#cakes"    onClick={closeMenu}>Cakes</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about"    onClick={closeMenu}>About</a>
          <a href="#classes"  onClick={closeMenu}>Classes</a>
          <a href="#contact"  onClick={closeMenu}>Contact</a>
        </nav>

        {/* RIGHT — Order btn (desktop) */}
        <div className="nav-right">
          <a href="#order" className="order-btn">Order Now</a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

      </div>

      {/* Red bottom line — desktop only, fades on scroll */}
      <div className="navbar__redline" aria-hidden="true" />

      {/* Mobile full-screen drawer */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-drawer__links">
          <a href="#cakes"    onClick={closeMenu}>Cakes</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about"    onClick={closeMenu}>About</a>
          <a href="#classes"  onClick={closeMenu}>Classes</a>
          <a href="#contact"  onClick={closeMenu}>Contact</a>
        </nav>
        <a href="#order" className="mobile-drawer__btn" onClick={closeMenu}>
          Order Now
        </a>
      </div>
    </header>
  );
};

export default Navbar;