import React, { useState, useRef, useEffect } from "react";
import "./Gallery.css";

const cakes = [
  { img: "/images/cake7.jpg", title: "Chocolate Delight", text: "Rich cocoa layers with creamy filling.", price: "$25" },
  { img: "/images/cake24.jpg", title: "Strawberry Dream", text: "Soft sponge with fresh berry cream.", price: "$22" },
  { img: "/images/cake22.jpg", title: "Vanilla Bliss", text: "Classic vanilla cake with smooth frosting.", price: "$20" },
  { img: "/images/cake17.jpg", title: "Red Velvet Luxe", text: "Velvety texture with elegant finish.", price: "$28" },
  { img: "/images/cake28.jpg", title: "Caramel Crunch", text: "Buttery caramel with crunchy pecan bits.", price: "$27" },
  { img: "/images/cake202.jpg", title: "Berry Passion", text: "Fresh berries folded into light mousse.", price: "$24" },
  { img: "/images/cake7.jpg", title: "Lemon Meringue", text: "Tangy lemon with silky meringue topping.", price: "$26" },
  { img: "/images/cake8.jpg", title: "Hazelnut Heaven", text: "Nutty layers with silky chocolate ganache.", price: "$29" },
  { img: "/images/cake9.jpg", title: "Salted Caramel", text: "Sweet caramel balanced with sea salt.", price: "$26" },
  { img: "/images/cake10.jpg", title: "Coconut Cloud", text: "Light coconut sponge with cream cheese icing.", price: "$23" },
  { img: "/images/cake11.jpg", title: "Matcha Dream", text: "Green tea layers with white chocolate.", price: "$25" },
  { img: "/images/cake12.jpg", title: "Coffee Velvet", text: "Rich coffee cake with crema frosting.", price: "$27" },
  { img: "/images/cake13.jpg", title: "Banana Caramel", text: "Soft banana cake with salted caramel.", price: "$22" },
  { img: "/images/cake14.jpg", title: "Peach Blossom", text: "Fresh peach filling with almond sponge.", price: "$24" },
  { img: "/images/cake15.jpg", title: "Cherry Chocolate", text: "Cherry compote between chocolate layers.", price: "$28" },
  { img: "/images/cake16.jpg", title: "Nutella Swirl", text: "Creamy hazelnut spread inside every slice.", price: "$30" },
];

const GallerySection = () => {
  const [expanded, setExpanded] = useState(false);
  const galleryRef = useRef(null);
  const visibleCakes = expanded ? cakes : cakes.slice(0, 6);
  const gridClass = expanded ? "cake-grid cake-grid--expanded" : "cake-grid";

  useEffect(() => {
    if (!expanded && galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [expanded]);

  return (
    <section ref={galleryRef} className="gallery-wrap" id="gallery">
      <div className="gallery-inner">
        <div className="gallery-heading-block">
          <p className="mini-title">Gallery</p>
          <h2>Our Cake Collection</h2>
        </div>

        <div className={gridClass}>
          {visibleCakes.map((cake) => (
            <div key={cake.title} className="cake-card">
              <img src={cake.img} alt={cake.title} />
              <div className="cake-card-text">
                <h4>{cake.title}</h4>
                <p>{cake.text}</p>
                <span>{cake.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-action">
          <button className="view-all-btn" type="button" onClick={() => setExpanded((prev) => !prev)}>
            {expanded ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;