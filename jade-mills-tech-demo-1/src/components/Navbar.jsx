import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuOverlay from "./MenuOverlay";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Optionally close menu on route change
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" /> Autumn Realty
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li className="hide-on-mobile"><Link to="/about">About</Link></li>
          <li className="hide-on-mobile"><Link to="/listings">Listings</Link></li>
          <li className="hide-on-mobile"><Link to="/press">Press</Link></li>
          <li className="hide-on-mobile"><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <span />
          <span />
          <span />
        </div>
      </nav>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;


