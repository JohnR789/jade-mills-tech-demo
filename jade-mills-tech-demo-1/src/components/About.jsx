import React from 'react';
import './About.css';

const About = () => (
  <section className="about" id="about">
    <h2 data-aos="fade-up">About Our Team</h2>
    <div className="about-content" data-aos="fade-up" data-aos-delay="150">
      <div>
        <p>
          We are dedicated to excellence in luxury real estate, offering unmatched expertise and personalized service.  
          Our award-winning team has been featured in global publications for integrity, results, and an exclusive network of buyers and sellers.
        </p>
        <div className="press-logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/New_York_Times_logo_variation.jpg" alt="NY Times" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Forbes_logo.svg" alt="Forbes" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/CNN.svg" alt="CNN" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
