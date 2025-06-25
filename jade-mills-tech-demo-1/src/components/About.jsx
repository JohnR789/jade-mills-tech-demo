import React from 'react';
import './About.css';

const About = () => (
  <section className="about" id="about">
    <h2 data-aos="fade-up">About Autumn Realty Group</h2>
    <div className="about-content" data-aos="fade-up" data-aos-delay="150">
      <div>
        <p>
          At <b>Autumn Realty Group</b>, we blend decades of local expertise with the warmth of small-town service.  
          From classic colonials to modern retreats, our team is dedicated to helping you find your perfect home among New England’s most vibrant fall landscapes.
        </p>
        <p>
          Recognized for our commitment, integrity, and results, our agents love connecting neighbors and making every move feel like a fresh start—no matter the season!
        </p>
        <div className="press-logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Better_Homes_and_Gardens_logo.svg" alt="Better Homes & Gardens" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/New_York_Times_logo_variation.jpg" alt="NY Times" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/National_Public_Radio_logo.svg" alt="NPR" />
        </div>
      </div>
    </div>
  </section>
);

export default About;

