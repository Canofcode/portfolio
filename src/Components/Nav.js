import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "../style.css";

const Nav = () => {
  return (
    <nav>
      <ul className="nav--ul">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Nav;
