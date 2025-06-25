import React from "react";
import PressBar from "../components/PressBar";

const Press = () => (
  <main style={{ paddingTop: 100, textAlign: "center" }}>
    <h1 data-aos="fade-up">Press & Recognition</h1>
    <PressBar />
    <div data-aos="fade-up" data-aos-delay="150" style={{ marginTop: 32 }}>
      <blockquote>
        “Autumn Realty’s market knowledge and community roots are unmatched.” <br />— <b>Better Homes & Gardens</b>
      </blockquote>
      <blockquote style={{ marginTop: 32 }}>
        “A fresh, trustworthy approach to buying and selling.” <br />— <b>National Public Radio</b>
      </blockquote>
    </div>
  </main>
);

export default Press;
