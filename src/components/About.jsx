import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const stats = [
  { end: 500, suffix: "+", label: "Cakes Made" },
  { end: 200, suffix: "+", label: "Happy Brides" },
  { end: 8,   suffix: "",  label: "Years of Craft" },
];

function CountUp({ end, suffix, trigger }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 1800;
    const stepTime = Math.max(10, Math.floor(duration / end));
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / stepTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [trigger, end]);

  return (
    <span className="about__stat-number">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            entry.target.classList.add("about--visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" ref={sectionRef}>
      <div className="about__inner">

        {/* ── LEFT: Image ── */}
        <div className="about__img-col">
          <div className="about__img-frame">
            <img src="/boss.jpeg" alt="Céleste bakery" className="about__img" />
            {/* Tag hidden on mobile via CSS */}
            <div className="about__img-tag">
              <span>Est.</span>
              <strong>2016</strong>
            </div>
          </div>
          {/* Desktop dot grid — bottom-right of image */}
          <div className="about__dot-grid" aria-hidden="true" />
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="about__content">
          <span className="about__eyebrow">Our Story</span>

          <h2 className="about__heading">
            Baked with Passion,<br />Delivered with Love
          </h2>

          <p className="about__body">
            Cake pro & events was born from a simple belief: every celebration deserves
            something extraordinary. From our studio in Harare, we've been
            crafting cakes and memories for over eight years.
          </p>
          <p className="about__body">
            Our team of passionate bakers and decorators brings creativity and
            precision to every order, whether it's an intimate birthday cake
            or a grand wedding showpiece for five hundred guests.
          </p>

          <div className="about__stats">
            {stats.map((s, i) => (
              <div
                className="about__stat-card"
                key={s.label}
                style={{ animationDelay: `${0.1 + i * 0.15}s` }}
              >
                <CountUp end={s.end} suffix={s.suffix} trigger={visible} />
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <button className="about__cta">Contact Us</button>

          {/* Mobile-only dot grid — centred below button, circular shape */}
          <div className="about__dot-grid--mobile" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}