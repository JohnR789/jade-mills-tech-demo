import React from "react";
import Hero from "../components/Hero";
import ListingsSlider from "../components/ListingsSlider";
import Communities from "../components/Communities";
import PressBar from "../components/PressBar";
import ContactForm from "../components/ContactForm";

const Home = () => (
  <main>
    <Hero />
    <PressBar />
    <ListingsSlider />
    <Communities />
    <ContactForm />
  </main>
);

export default Home;
