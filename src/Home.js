import React from "react";
import "./style.css"
import pp from "./Images/pp.jpg"
import sp from "./Images/sp.jpg"
import sp2 from "./Images/sp2.jpg"
import { Col, Row, Image, Container, Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useForm } from '@formspree/react';

const Home = () => {

  const [state, handleSubmit] = useForm("mqkngvnv");
  if (state.succeeded) {
    return (
      alert("Thank you for gettin in contact, I will be in contact with you in 1-2 working days.")
    )
  }

  return (

    <Container id="home">
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
          <p className="mt-5 p-3 home--desc">Hi, my name is Kurtis Denning, I am 22 years of age and am currently in my third year of my bachalor IT degree at Southern Institute of Technology.</p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 2 }}>
          <h2 className="mt-5 pt-md-4 text-center home--desc-title" id="projects">My Featured Projects</h2>
        </Col>
      </Row>
      <div className="home--background-style home--projects-background-text">
        <Row>
          <Col md={{ span: 5, offset: 2 }}>
            <p className="mb-5 mt-5 p-3 home--desc">Below are some of the projects that I have worked on;<br /><br />Starting with my home server, this is a project which has been gradually being improved upon since 2018.<br /><br />As you can see from the image below it is hosting a multitude of things but its main purpose is as a highly accessible home media server running on linux with docker for containerization of apps.</p>
          </Col>
        </Row>
        <div className="relcontain">
          <Image className="img-fluid" src={sp} />
          <p className="ms-2 mb-2 pos-bottom-left home--proj-name">Home Server</p>
          <p className="me-2 mb-2 home--proj-date home--proj-name pos-bottom-right">2018 - Current</p>
        </div>
      </div>

      <Row className="pt-5 mt-5 pb-5">
        <Col className="p-0 m-0" md={{ span: 7, offset: 0 }}>
          <Image fluid src={sp2}></Image>
        </Col>
        <Col className="m-0 p-0" md={{ span: 5, offset: 0 }}>
          <div className="home--proj-two-text d-flex relcontain">
            <p className="ps-5 ms-4 home--proj-date home--proj-name home--date-two purple ">2022 - Current</p>
            <p className="ms-md-5 pt-md-3 pt-4 home--proj-name home--proj-name-two purple">This Portfolio!</p>
            <div className="achieve-desc pos-bottom-right w-75 pb-2 me-4">
              <p>The project that I am currently working on which is built in React, utilizes bootstrap 5.1 and will be containerized with docker for deployment. This is another on going project that I will be keeping up to date with my new projects and achievements.</p>
            </div>
          </div>
        </Col>
      </Row>

      <div className="home--background-text-3 home--background-style">
        <h2 id="achievements" className="pt-5 mt-5 mb-5 home--achievements-title">Achievements</h2>
        <Row>
          <Col md={{ span: 5, offset: 0 }}>
            <p className=" mb-5 achieve-desc">Below is a list of my current achievements though small, this list will grow much larger as I am always studying for more certifications so watch this space!</p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 0 }}>
            <h4 className="mt-5 purple-title">Certificate of Information Technologies Essentials (Level 4)</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="home--achievement-date mt-4">3rd December 2018</p>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 1, offset: 10 }} md={{ span: 1, offset: 4 }}>
            <p className="purple-title text-right">01</p>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 5, offset: 0 }}>
            <p className="hr"><hr /></p>
          </Col>
        </Row>

        <Row className="mt-5 pt-5">
          <Col md={{ span: 5, offset: 7 }}>
            <h4 className="mt-5 purple-title-2">JADE Team Project Winner</h4>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 9 }}>
            <p className="home--achievement-date-2 mt-4 me-md-5">Late 2021</p>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 1, offset: 10 }} md={{ span: 1, offset: 11 }}>
            <p className="purple-title text-right">02</p>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 5, offset: 7 }} className="pb-5">
            <p className="hr"><hr /></p>
          </Col>
        </Row>
      </div>

      <Row>
        <Col md={{ span: 5, offset: 6 }}>
          <p style={{ fontWeight: "bold" }} className="mb-5 mt-5 p-3 home--desc">The projects that I have worked on so far as well as the skills acquired through my studies have given me a wide range of skills which are applicable to both development to infrastructure type roles.</p>
        </Col>
      </Row>

      <Row id="contact">
        <Col md={{ span: 5, offset: 2 }}>
          <h2 className="mt-5 pt-5 mb-5 home--achievements-title">Contact me</h2>
        </Col>
      </Row>

      <Row className="pt-3">
        <Col md={{ span: 5, offset: 2 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "#55508E", fontWeight: "bold" }}>Email address:</Form.Label>
              <Form.Control id="email" name="email" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Label style={{ color: "#55508E", fontWeight: "bold" }} className="mt-3">Message:</Form.Label>
            <InputGroup>
              <FormControl id="message" name="message" as="textarea" placeholder="Please be sure to include a name and company along with your message :)" aria-label="With textarea" />
            </InputGroup>
            <Button className="mt-3" style={{ backgroundColor: "#55508E" }} type="submit" disabled={state.submitting}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container >
  )
};

export default Home;
