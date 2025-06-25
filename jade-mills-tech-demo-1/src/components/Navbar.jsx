import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"><img src="/logo.png" alt="Logo" /> Jade Mills Demo</div>
      <ul className={`nav-links ${open ? 'active' : ''}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#listings">Listings</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div
        className="hamburger"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
};

export default Navbar;
