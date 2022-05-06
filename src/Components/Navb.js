import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Navb = () => {
  return (
    <div>
      <Navbar bg="navbar--color" expand="md" collapseOnSelect>
        <Navbar.Brand style={{ color: "#55508E", margin: "8px 0px 0px 20px" }}>
          <h3>KD</h3>
        </Navbar.Brand>

        <Navbar.Toggle className="me-4" style={{ background: "#ffffff", outline: "none", boxShadow: "none" }} />
        <NavbarCollapse className="navb--navbar-align-right">
          <Nav>
            <Nav.Link to="#home" href="#home">
              <div className="navbar--items">
                Home
              </div>

            </Nav.Link>

            <Nav.Link to="#projects" href="#projects">
              <div className="navbar--items">
                Projects
              </div>
            </Nav.Link>

            <Nav.Link to="#achievements" href="#achievements">
              <div className="navbar--items">
                Achievements
              </div>
            </Nav.Link>

            <Nav.Link to="#contact" href="#contact">
              <div className="navbar--items">
                Contact
              </div>
            </Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default Navb;
