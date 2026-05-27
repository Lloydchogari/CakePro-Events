import React from "react";
import "./Services.css";

const SERVICE_ICONS = [
  { src: "/Cake1.jpg", alt: "Service 1" },
  { src: "/cake4.jpg", alt: "Service 2" },
  { src: "/cake.jpg", alt: "Service 3" },
  { src: "/decor2.jpg", alt: "Service 4" },
  { src: "/cake_2.jpg", alt: "Service 5" },
  { src: "/logo.jpeg", alt: "Service 6" },
];

export default function Services() {
  // We double the array to ensure a seamless infinite loop
  const scrollIcons = [...SERVICE_ICONS, ...SERVICE_ICONS];

  return (
    <section className="services">
      <div className="services__container">
        <h3 className="services__title">Our Services</h3>
        
        {/* Scrolling Track */}
        <div className="services__slider">
          <div className="services__track">
            {scrollIcons.map((icon, index) => (
              <div className="services__item" key={index}>
                <img src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Right Button */}
        <div className="services__footer">
          <a href="/services" className="services__btn">
            View All
          </a>
        </div>
      </div>
    </section>
  );
}