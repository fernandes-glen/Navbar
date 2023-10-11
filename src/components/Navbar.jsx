import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/* "/" specfies root and takes us to the main path  */}
      <Link to="/" className="title">
        Website
      </Link>
      <ul>
        <li>
          {/* here link tag specfies that we need to create a link and  to specfies where we need to go  */}
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
