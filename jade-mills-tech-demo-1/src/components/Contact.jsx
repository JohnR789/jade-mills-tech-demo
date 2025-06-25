import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <h2 data-aos="fade-up">Contact Our Team</h2>
    <form className="contact-form" data-aos="fade-up" data-aos-delay="100">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message" rows={5} />
      <button type="submit">Send Message</button>
    </form>
    <p style={{ marginTop: 30, color: "#888" }}>
      Or call us: <a href="tel:+1234567890">(123) 456-7890</a>
    </p>
  </section>
);

export default Contact;
