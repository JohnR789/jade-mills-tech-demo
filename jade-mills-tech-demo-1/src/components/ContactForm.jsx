import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="100">
      <input type="text" name="name" placeholder="Your Name" required autoComplete="off" />
      <input type="email" name="email" placeholder="Email Address" required autoComplete="off" />
      <textarea name="message" placeholder="Your Message" rows={5} required />
      <button type="submit">Send Message</button>
      {sent && <div className="contact-form-success">Message sent! (Demo only)</div>}
    </form>
  );
};

export default ContactForm;
