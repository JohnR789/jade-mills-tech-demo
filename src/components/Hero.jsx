import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero" id="hero">
    <video autoPlay muted loop className="hero-bg">
      <source src="/bg-video.mp4" type="video/mp4" />
      {/* Add a royalty-free video named bg-video.mp4 in public folder */}
    </video>
    <div className="hero-content">
      <h1 data-aos="fade-up">Luxury Real Estate, Modern Living</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        Discover your dream home with our world-class service.
      </p>
      <a href="#listings" className="hero-btn" data-aos="fade-up" data-aos-delay="400">
        View Listings
      </a>
    </div>
    <div className="hero-overlay" />
  </section>
);

export default Hero;
