import React from "react";
import ListingsSlider from "../components/ListingsSlider";

const Listings = () => (
  <main style={{ paddingTop: 100 }}>
    <h1 data-aos="fade-up" style={{ textAlign: "center" }}>All Listings</h1>
    <ListingsSlider showAll />
  </main>
);

export default Listings;

