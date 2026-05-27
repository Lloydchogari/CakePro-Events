import React from "react";
import "./ShowcaseSection.css";

const CAKE_IMAGES = [
  { src: "/cake.jpg",       alt: "Signature Drip Cake" },
  { src: "/cake2.jpg",      alt: "Red Velvet Showpiece" },
  { src: "/cake4.jpg",      alt: "Floral Wedding Tier" },
  { src: "/cake_2.jpg",     alt: "Fondant Sculpt" },
  { src: "/cake4 (2).jpg",  alt: "Caramel Celebration" },
];

const ARC_TILTS   = [-28, -14, 0, 14, 28];
const ARC_DROP_Y  = [60, 24, 0, 24, 60];
const ARC_SCALES  = [0.82, 0.91, 1, 0.91, 0.82];

const FEATURES = [
  { title: "Custom Cake Design",  body: "Every cake is designed from scratch, tailored to your theme, colours, and vision." },
  { title: "Premium Ingredients", body: "Belgian chocolate, farm-fresh eggs, and artisan buttercreerts in every single order." },
  { title: "Delivered Fresh",      body: "Hand-delivered across Harare on the day of your event, refrigerated and on time." },
];

export default function ShowcaseSection() {
  return (
    <section className="showcase">
      <div className="showcase__hero-text">
        <h2 className="showcase__heading">
          <span className="showcase__heading-thin">Baked for Every</span>
          <span className="showcase__heading-bold">Celebration in Harare</span>
        </h2>
        <p className="showcase__subheading">
          Handcrafted with precision, delivered with care,
          and designed to leave everyone speechless.
        </p>
        <a href="#order" className="showcase__cta">
          Order Your Cake <span className="showcase__cta-arrow">→</span>
        </a>
      </div>

      {/* ── Arc carousel (Static) ── */}
      <div className="showcase__arc">
        {CAKE_IMAGES.slice(0, 5).map((img, pos) => (
          <div
            key={pos}
            className="showcase__card"
            style={{
              "--tilt":  `${ARC_TILTS[pos]}deg`,
              "--dropY": `${ARC_DROP_Y[pos]}px`,
              "--scale": ARC_SCALES[pos],
              "--pos":   pos,
              zIndex: pos === 2 ? 5 : (pos === 1 || pos === 3 ? 4 : 3),
            }}
          >
            <img src={img.src} alt={img.alt} draggable="false" />
            <div className="showcase__card-label">{img.alt}</div>
          </div>
        ))}

        <div className="showcase__ghost showcase__ghost--left"  aria-hidden="true" />
        <div className="showcase__ghost showcase__ghost--right" aria-hidden="true" />
      </div>

      {/* ── Feature columns ── */}
      <div className="showcase__features">
        {FEATURES.map((f) => (
          <div className="showcase__feature" key={f.title}>
            <h4 className="showcase__feature-title">{f.title}</h4>
            <p  className="showcase__feature-body">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}