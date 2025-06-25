import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => (
  <main style={{ paddingTop: 100 }}>
    <h1 data-aos="fade-up" style={{ textAlign: "center" }}>Contact Us</h1>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <ContactForm />
      <div style={{ marginTop: 32, color: "#8B5E3C" }}>
        <p>
          Or reach out at <b>info@autumnrealty.com</b> <br />
          <span style={{ fontSize: 17 }}>123 Maple Lane, Harvest City, NH</span>
        </p>
      </div>
    </div>
  </main>
);

export default Contact;
