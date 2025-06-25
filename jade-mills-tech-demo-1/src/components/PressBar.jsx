import React from "react";
import "./PressBar.css";

const pressLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Better_Homes_and_Gardens_logo.svg",
    alt: "Better Homes & Gardens",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/New_York_Times_logo_variation.jpg",
    alt: "NY Times",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Forbes_logo.svg",
    alt: "Forbes",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/75/National_Public_Radio_logo.svg",
    alt: "NPR",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5a/CNN.svg",
    alt: "CNN",
  },
];

const PressBar = () => (
  <div className="press-bar" data-aos="fade-up" data-aos-delay="100">
    <div className="press-bar-label">
      <span>As Seen In</span>
    </div>
    <div className="press-bar-logos">
      {pressLogos.map((logo, i) => (
        <img src={logo.src} alt={logo.alt} key={i} />
      ))}
    </div>
  </div>
);

export default PressBar;

