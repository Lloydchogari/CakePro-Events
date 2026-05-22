import React, { useEffect, useRef } from "react";
import "./Training.css";

const CLASSES = [
  {
    title: "Beginners' Basics",
    desc: "Sponges, buttercreams, and simple decorating techniques. Perfect for absolute beginners. Saturdays, 2 hrs.",
  },
  {
    title: "Cake Decoration Workshop",
    desc: "Fondant, sugar flowers, hand-painting, and advanced finishing. Intermediate level. Sundays, 3 hrs.",
  },
  {
    title: "Wedding Cake Intensive",
    desc: "Full construction, tiering, and bridal styling techniques. Advanced. Weekend full-day format.",
  },
  {
    title: "Private 1-on-1 Sessions",
    desc: "Customised to your skill level and goals. Book any day — fully flexible and personalised.",
  },
];

export default function Training() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("training--visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="classes" className="training" ref={sectionRef}>
      {/* Parallax background */}
      <div className="training__bg" aria-hidden="true" />
      {/* White overlay */}
      <div className="training__overlay" aria-hidden="true" />

      <div className="training__inner">
        {/* ── LEFT ── */}
        <div className="training__left">
          <span className="training__eyebrow">Learn With Us</span>

          <h2 className="training__heading">
            Baking <em>Masterclasses</em>
          </h2>

          <div className="training__rule" aria-hidden="true" />

          <p className="training__body">
            Whether you're a curious beginner or an aspiring professional, our
            intimate workshops give you the skills, confidence, and creativity
            to bake beautifully.
          </p>

          <button
            className="training__cta"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a Class
          </button>
        </div>

        {/* ── RIGHT: Class cards ── */}
        <div className="training__cards">
          {CLASSES.map((c, i) => (
            <div
              className="training__card"
              key={c.title}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <h4 className="training__card-title">{c.title}</h4>
              <p className="training__card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}