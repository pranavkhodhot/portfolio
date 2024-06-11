import React from "react";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <div
      className="bg-dark text-light py-5 d-flex flex-column align-items-center justify-content-center min-height"
      style={{ marginTop: "80vh" }}
    >
      <Container className="text-center">
        <h1 className="display-4 my-5">About Me</h1>
        <Container style={{ maxWidth: "50%" }}>
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
        </Container>
      </Container>
    </div>
  );
};

export default About;
