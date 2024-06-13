import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <div
      className="bg-dark text-light py-5 d-flex flex-column align-items-center justify-content-center min-height my-5"
    >
      <Container>
        <h1 className="display-4 my-5 text-center">About Me</h1>
        <Container style={{ maxWidth: "85%" }}>
          <Row className="align-items-center ms-1">
            <Col xs={12} sm={12} md={12} lg={12} xl={6} className="text-center mb-4 mb-md-0">
              <img src="/public/pranavkhodhot.png" alt="Pranav Khodhot" className="w-100 rounded-circle"/>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={6}>
              <p className="lead lh-lg">
                I'm currently a fourth-year student at Carleton University studying
                Computer Science. My love for math and problem-solving has always
                driven me, but there's another realm that equally captures my
                interest — the digital world. I've been immersing myself in coding
                ever since high school, starting with Python (Automation, Web
                Scraping, GUI, Pen Testing), and then delving into web development,
                mastering technologies such as HTML, CSS, and JavaScript. Nowadays,
                I spend most of my coding time crafting full-stack applications,
                blending my passion for logical challenges with creative solutions
                in the web space.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default About;
