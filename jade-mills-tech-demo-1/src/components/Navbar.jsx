import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" /> Autumn Realty
      </div>
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/listings" onClick={() => setOpen(false)}>Listings</Link></li>
        <li><Link to="/press" onClick={() => setOpen(false)}>Press</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
      <div className="hamburger" onClick={() => setOpen((o) => !o)}>
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
};

export default Navbar;

