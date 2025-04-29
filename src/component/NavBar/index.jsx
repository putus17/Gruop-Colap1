import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/services" className="nav-link">Services</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  );
};

export default NavBar;
