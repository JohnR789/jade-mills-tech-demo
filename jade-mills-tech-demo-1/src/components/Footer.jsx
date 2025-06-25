import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div>
      &copy; {new Date().getFullYear()} Jade Mills Demo. All rights reserved.
    </div>
    <div>
      <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
    </div>
  </footer>
);

export default Footer;
