import React, { useEffect, useRef } from "react";
import "./Flavour.css";

const flavourCircles = [
  { id: 1, src: "/cake2.jpg", alt: "Chocolate Cake", top: "3%",  left: "50%" },
  { id: 2, src: "/cake4 (2).jpg", alt: "Caramel Cake",   top: "20%", left: "60%" },
  { id: 3, src: "/cake4.jpg", alt: "Red Velvet",     top: "40%", left: "62%" },
  { id: 4, src: "/cake_2.jpg", alt: "Floral Cake",    top: "58%", left: "54%" },
  { id: 5, src: "/cake.jpg", alt: "Layered Cake",   top: "74%", left: "42%" },
];

export default function Flavour() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("flavour--visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="flavour" ref={sectionRef}>
      <div className="flavour__blob" aria-hidden="true" />

      <div className="flavour__inner">
        <div className="flavour__visual">
          <div className="flavour__hero-wrap">
            <img
              src="/logo.jpeg"
              alt="Hero chocolate drip cake"
              className="flavour__hero-img"
            />
          </div>

          <svg
            className="flavour__connector"
            viewBox="0 0 300 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M 60 520 C 100 440, 200 380, 180 310 C 160 240, 120 200, 160 130 C 190 75, 210 50, 200 10"
              stroke="#c8a08a"
              strokeWidth="1.5"
              strokeDasharray="6 5"
              fill="none"
            />
          </svg>

          {/* Floating circular thumbnails */}
          {flavourCircles.map((item, i) => (
            <div
              key={item.id}
              className="flavour__circle"
              style={{ top: item.top, left: item.left, animationDelay: `${0.1 + i * 0.12}s` }}
            >
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flavour__content">
          <div className="flavour__overlap-img-wrap">
            <img
              src="/images/cake16.jpg"
              alt="Featured cake"
              className="flavour__overlap-img"
            />
          </div>

          <h2 className="flavour__title">Flavour Based</h2>

          <p className="flavour__desc">
            Explore our wide range of delicious cake flavours, crafted to
            satisfy every taste. From rich chocolate to refreshing fruit
            flavors, each cake is freshly baked with premium ingredients for
            a perfect treat.
          </p>

          <ul className="flavour__list">
            <li>Eggless Cakes</li>
            <li>Sugar-Free Cakes</li>
            <li>Fresh Cream Cakes</li>
          </ul>

          <div className="flavour__actions">
            <button className="flavour__btn flavour__btn--filled">
              View Flavours
            </button>
            <button className="flavour__btn flavour__btn--outline">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}