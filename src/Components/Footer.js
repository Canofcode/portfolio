import React from 'react'
import "../style.css"
import { Col, Row, Container, Nav } from "react-bootstrap";



const Footer = () => {
    return (
        <Container fluid style={{ backgroundColor: "#55508E" }} className="mt-5 pt-5 pb-5">
            <Nav.Link to="#home" href="#home">
                <div className='white text-center'>
                    <h3 className='footer--kd'>KD</h3>
                </div>
            </Nav.Link>
            <Row>
                <Col className="text-center col-4 offset-4 col-md-12 offset-md-0 footer--col">
                    <Nav className='justify-content-center'>
                        <Nav.Link to="#home" href="#home">
                            <div className='footer--nav-items'>Home</div>
                        </Nav.Link>

                        <Nav.Link to="#projects" href="#projects">
                            <div className='footer--nav-items'>Projects</div>
                        </Nav.Link>

                        <Nav.Link to="#achievements" href="#achievements">
                            <div className='footer--nav-items'>Achievements</div>
                        </Nav.Link>

                        <Nav.Link to="#contact" href="#contact">
                            <div className='footer--nav-items'>Contact</div>
                        </Nav.Link>
                    </Nav>
                </Col>
            </Row >
        </Container >
    )
}

export default Footer