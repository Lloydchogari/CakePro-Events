import React from "react";
import "./Black.css";

const cards = [
  { title: "Custom Cakes", text: "Made to fit your theme and taste." },
  { title: "Wedding Cakes", text: "Elegant designs for your big day." },
  { title: "Baking Lessons", text: "Learn baking step by step." },
  { title: "Delivery & Setup", text: "Safe delivery and smooth setup." },
];

const BlackInfoSection = () => {
  return (
    <section className="black-section">
      <div className="black-inner">
        <div className="black-image">
          <img src="/public/cake2.jpg" alt="Cake display" />
        </div>

        <div className="black-content">
          <div className="text-card">
            <h3>Sweet moments start here</h3>
            <p>
              We create beautiful cakes and special celebration experiences that
              make every occasion feel extra memorable.
            </p>
          </div>

          <div className="text-grid">
            {cards.map((card) => (
              <div key={card.title} className="mini-card">
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackInfoSection;