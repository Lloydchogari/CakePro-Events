import React, { useEffect, useRef } from "react";
import "./Testimonials.css";

const REVIEWS = [
  { quote: "The most beautiful cake I've ever seen — and it tasted even better than it looked. Our guests couldn't stop talking about it.", author: "Amara Chikwanda", role: "Bride, 2024" },
  { quote: "They made my daughter's fifth birthday absolutely magical. The princess cake was perfect in every detail. 100% recommending to everyone.", author: "Tendai Moyo", role: "Birthday Mom" },
  { quote: "My go-to studio for all client events. Reliable, endlessly creative, and the quality is consistently unmatched in Harare.", author: "Grace Nkomo", role: "Event Planner" },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("testimonials--visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="testimonials__bg" aria-hidden="true" />
      <div className="testimonials__overlay" aria-hidden="true" />

      <div className="testimonials__inner">
        <div className="testimonials__header">
          <span className="testimonials__eyebrow">Reviews</span>
          <h2 className="testimonials__heading">
            What Clients <em>Say</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="testimonials__grid">
          {REVIEWS.map((r, i) => (
            <div
              className="testimonials__card"
              key={r.author}
              style={{ transitionDelay: `${0.1 + i * 0.13}s` }}
            >
              <div className="testimonials__stars">★★★★★</div>
              <p className="testimonials__quote">"{r.quote}"</p>
              <div className="testimonials__author-block">
                <span className="testimonials__author">{r.author}</span>
                <span className="testimonials__role">{r.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}