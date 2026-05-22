import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const navRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark section detection
  useEffect(() => {
    const darkSections = document.querySelectorAll('[data-theme="dark"]');
    if (!darkSections.length) return;

    const check = () => {
      const navHeight = navRef.current?.offsetHeight || 70;
      const midpoint = navHeight / 2;
      const overDark = [...darkSections].some((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= midpoint && rect.bottom >= midpoint;
      });
      setIsLight(overDark);
    };

    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? "scrolled" : ""} ${isLight ? "navbar--light" : ""}`}
    >
      <div className="nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <img src="/public/logo.jpeg" alt="Cake Logo" />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#cakes" onClick={closeMenu}>Cakes</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#classes" onClick={closeMenu}>Classes</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#order" className="order-btn" onClick={closeMenu}>Order Now</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;