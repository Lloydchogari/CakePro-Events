import React, { useEffect, useRef, useState } from "react";
import "./Decor.css";

export default function DecorCTA() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={`decor-cta ${visible ? "is-visible" : ""}`} 
      ref={sectionRef}
    >
      <div className="decor-cta__container">
        
        <div className="decor-cta__text-content">
          <span className="decor-eyebrow">Luxury Events & Decor</span>
          <h2 className="decor-title">
            Beyond Baking: <br />
            <span>Exquisite Event Styling</span>
          </h2>
          <p className="decor-description">
            We don't just provide the centerpiece; we set the whole stage. 
            From dream weddings and vibrant birthdays to sleek white parties, 
            our decor team transforms Harare's finest venues into 
            unforgettable atmospheres.
          </p>
          <a href="/events" className="decor-link-btn">
            Explore Events
            <span className="arrow">→</span>
          </a>
        </div>

        <div className="decor-cta__visuals">
          <div className="decor-img-top">
            <img src="/logo.jpeg" alt="logo" />
          </div>
          <div className="decor-img-bottom-row">
            <div className="decor-circle-img">
              <img src="/decor1.jpg" alt="Birthday Decor" />
            </div>
            <div className="decor-circle-img">
              <img src="/decor3.jpg" alt="White Party Decor" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}