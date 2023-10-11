import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      {/* "/" specfies root and takes us to the main path  */}
      <Link to="/" className="title">
        Website
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : " "}>
        <li>
          {/* here link tag specfies that we need to create a link and  to specfies where we need to go  */}
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
