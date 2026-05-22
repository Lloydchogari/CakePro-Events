import React from "react";
import "./Services.css";

const services = [
  {
    title: "Custom Cakes",
    text: "Personalized cakes designed to match your theme, taste, and celebration.",
    icon: "🎂",
  },
  {
    title: "Wedding Cakes",
    text: "Elegant wedding cakes crafted to make your big day unforgettable.",
    icon: "💍",
  },
  {
    title: "Baking Lessons",
    text: "Learn cake baking and decorating with hands-on friendly lessons.",
    icon: "📚",
  },
  {
    title: "Wedding Decor",
    text: "Beautiful decor styling to complement your wedding cake and venue.",
    icon: "🌸",
  },
  {
    title: "Birthday Decor",
    text: "Fun and classy birthday setups for all ages and party styles.",
    icon: "🎉",
  },
  {
    title: "Event Decor",
    text: "Full event styling that makes your celebration look polished and special.",
    icon: "✨",
  },
  {
    title: "Delivery",
    text: "Safe and timely delivery so your cake arrives fresh and perfect.",
    icon: "🚚",
  },
  {
    title: "Setup",
    text: "Professional setup for cakes and decor so everything looks just right.",
    icon: "🛠️",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="services-header">
          <p className="services-mini">Our Services</p>
          <h2>Everything we give for your special moments</h2>
          <p className="services-text">
            From custom cakes to full event styling, we make celebrations sweet,
            beautiful, and stress-free.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;