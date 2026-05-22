import React, { useEffect, useRef, useState } from "react";
import "./Decor.css";

export default function DecorCTA() {
  const sectionRef = useRef(null);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("decor-cta--visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleEnquire = () => {
    setLeaving(true);
    setTimeout(() => {
      // Replace "/decor" with your actual decor page route
      window.location.href = "/decor";
    }, 700);
  };

  return (
    <section
      id="decor-cta"
      className={`decor-cta ${leaving ? "decor-cta--leaving" : ""}`}
      ref={sectionRef}
    >
      {/* Parallax background */}
      <div className="decor-cta__bg" aria-hidden="true" />
      {/* Dark overlay */}
      <div className="decor-cta__overlay" aria-hidden="true" />

      <div className="decor-cta__inner">
        <div className="decor-cta__content">
          <span className="decor-cta__eyebrow">Wedding &amp; Event Decor</span>

          <h2 className="decor-cta__heading">
            We <em>Transform</em><br />Your Space
          </h2>

          <p className="decor-cta__body">
            From intimate garden parties to grand wedding receptions — our
            decor team handles every detail so you can be fully present in
            the moment.
          </p>

          <button className="decor-cta__btn" onClick={handleEnquire}>
            <span className="decor-cta__btn-text">Enquire About Decor</span>
            <span className="decor-cta__btn-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Page-transition curtain */}
      <div className="decor-cta__curtain" aria-hidden="true" />
    </section>
  );
}