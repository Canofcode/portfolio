import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Navb = () => {
  return (
    <div>
      <Navbar bg="light" varient="light" expand="sm" collapseOnSelect>
        <Navbar.Brand style={{ color: "#55508E" }}>
          <h3>KD</h3>
        </Navbar.Brand>

        <Navbar.Toggle />
        <NavbarCollapse>
          <Nav className="d-flex align-content-end">
            <Nav.Link as={Link} to="/home" href="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" href="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default Navb;
