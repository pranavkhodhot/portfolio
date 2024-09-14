import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="py-5 d-flex flex-column align-items-center justify-content-center min-height my-5 position-relative z-1"
      id="about-me"
    >
      <Container
        as={motion.div}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="display-4 my-5 text-center font-weight-800 fw-bold">
          About Me
        </h1>
        <Container style={{ maxWidth: "85%" }}>
          <Row className="align-items-center ms-1">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={6}
              className="text-center mb-4 mb-md-0"
            >
              <img
                src="/pranavkhodhot.png"
                alt="Pranav Khodhot"
                className="w-75 rounded-circle"
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={6}>
              <p className="lead lh-lg">
                I’m currently a fourth-year student at Carleton University
                studying Computer Science. My love for math and problem-solving
                has always driven me, providing a foundation for logical
                thinking and analytical skills. At the same time, I have a deep
                appreciation for creativity and its role in technology. This
                dual passion led me to the world of programming, where I started
                my journey with Python. From automating tasks and web scraping
                to building GUI applications, Python became my playground for
                blending logic and creativity. In addition to Python, I have
                ventured into web development, creating small websites using
                HTML, CSS, and JavaScript. These projects have allowed me to
                combine my problem-solving skills with my creative flair,
                crafting interactive and visually appealing web experiences.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default About;
