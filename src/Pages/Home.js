import React from "react";
import "../style.css"
import pp from "../Images/pp.jpg"
import sp from "../Images/sp.jpg"
import sp2 from "../Images/sp2.jpg"
import btnArrow from "../Images/btnArrow.png"
import { Col, Row, Image, Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="home--background-text-2 home--background-style">
        <Col md={{ span: 4, offset: 2 }}>
          <div className="pt-2 home--background-text-1 home--background-style">
            <p className="home--title-blurb">Why you should hire Kurtis</p>
            <h1 className="pb-4 home--title">Kurtis <br />Denning</h1>
          </div>
        </Col>
        <Col md={{ order: 'first', span: 4 }}>
          <Image className="ps-5 ps-md-0" fluid src={pp} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 6 }}>
          <p className="mt-5 p-3 home--desc">Hi my name is Kurtis and I like Apex Hi my name is Kurtis and I like ApexHi my name is Kurtis and I like ApexHi my name is Kurtis and I like ApexHi my name is Kurtis and I like ApexHi my name is Kurtis and I like ApexHi my name is Kurtis and I like ApexHi my name is Kurtis and I like ApexHi my name is Kurtis and I like Apex</p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 2 }}>
          <h3 className="mt-5 pt-md-4 text-center home--desc-title" id="projects">My Featured Projects</h3>
        </Col>
      </Row>
      <div className="home--background-style home--projects-background-text">
        <Row>
          <Col md={{ span: 5, offset: 2 }}>
            <p className="mb-5 mt-5 p-3 home--desc">Hi my name is Kurtis and I like Apex Hi my name is Kurtis and I like ApexHi my name is Kurtis and I like ApexHi my name is Kurtis and I like ApexHi my name is Kurtis and I like ApexHi my name is Kurtis and I like ApexHi my name is Kurtis and I like ApexHi my name is Kurtis and I like ApexHi my name is Kurtis and I like Apex</p>
          </Col>
        </Row>
        <div className="relcontain">
          <Image className="img-fluid" src={sp} />
          <Button
            style={{ background: "#55508e", color: "white", fontWeight: "bold" }} className="pos-top-right ps-3 pe-3 pt-2 pb-2 ps-md-4 pe-md-4 pt-md-3 pb-md-3">
            <img src={btnArrow} alt="btnArrow" className=" btnArrow" />
          </Button>
          <p className="ms-2 mb-2 pos-bottom-left home--proj-name">Home Server</p>
          <p className="me-2 mb-2 home--proj-date home--proj-name pos-bottom-right">2018 - Current</p>
        </div>
      </div>

      <Row className="pt-5 mt-5">
        <Col className="p-0" md={{ span: 7, offset: 0 }}>
          <Image fluid src={sp2}></Image>
        </Col>
        <Col className="m-0 p-0" md={{ span: 5, offset: 0 }}>
          <div className="home--proj-two-text d-flex relcontain">
            <p className="ps-5 ms-4 home--proj-date home--proj-name home--date-two purple ">2022 - Current</p>
            <p className="ms-md-5 pt-md-3 pt-5 home--proj-name home--proj-name-two purple">This Portfolio!</p>
            <div className="purple pos-bottom-right w-75 pb-5 me-4">
              <p>The project that I am currently working on which uses React plus bootstrap 5.1. This is an on going project that I will be keeping up to date with my new projects and achievements.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default Home;
