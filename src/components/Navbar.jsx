import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";

const phrases = [
  "wedding cakes",
  "custom cakes",
  "decor events",
  "birthday cakes",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) return;
    const id = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % phrases.length);
    }, 2200);
    return () => clearInterval(id);
  }, [scrolled]);

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? "scrolled" : ""} ${isLight ? "navbar--light" : ""} ${menuOpen ? "menu-is-open" : ""}`}
    >
      <div className="nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <img src="/logo.jpeg" alt="Cake Logo" />
        </a>

        <nav className="nav-links">
          <a href="#cakes">Cakes</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#classes">Classes</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-right">
          <a href="#order" className="order-btn">Order Now</a>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__mobile-hero ${scrolled ? "hide" : ""}`}>
        <div className="navbar__redline" aria-hidden="true" />
        <div className="navbar__rotating-text" aria-hidden="true">
          {phrases[textIndex]}
        </div>
      </div>

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-drawer__overlay" onClick={closeMenu} />
        <div className="mobile-drawer__panel">
          <nav className="mobile-drawer__links">
            <a href="#cakes" onClick={closeMenu}>Cakes</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#classes" onClick={closeMenu}>Classes</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <div className="mobile-drawer__bottom">
            <a href="#order" className="mobile-drawer__btn" onClick={closeMenu}>
              Place an Order
            </a>
            <p className="mobile-drawer__tagline">Harare's Finest Pastries</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;