import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        
        {/* TEXT CONTENT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Beautiful Cakes Made Fresh for Every Occasion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Discover handcrafted cakes, custom designs, and delicious flavors
            baked with care for birthdays, weddings, and special celebrations.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <a href="#cakes" className="btn btn-primary">View Cakes</a>
            <a href="#contact" className="btn btn-secondary">Book Tasting</a>
          </motion.div>
        </motion.div>

        {/* IMAGE WRAP (This pushes left on mobile) */}
        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <img src="/cake4.jpg" alt="Delicious cake" className="hero-image" />
        </motion.div>

        {/* VERTICAL ICONS (Pins to right on mobile) */}
        <motion.div
          className="hero-social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="social-item">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <span className="social-text">Facebook</span>
          </div>
          <div className="social-item">
            <a href="#" className="social-icon"><FaInstagram /></a>
            <span className="social-text">Instagram</span>
          </div>
          <div className="social-item">
            <a href="#" className="social-icon"><FaEnvelope /></a>
            <span className="social-text">Email</span>
          </div>
          <div className="social-item">
            <a href="#" className="social-icon"><FaPhone /></a>
            <span className="social-text">Call</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;