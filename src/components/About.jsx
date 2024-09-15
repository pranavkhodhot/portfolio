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
              <p className="lead lh-lg mt-5">
                I'm a passionate software developer with a strong focus on
                creating efficient, user-friendly web applications. With
                experience in both front-end and back-end development, I enjoy
                bringing design concepts to life and solving complex technical
                challenges. I’m continuously learning and expanding my skills,
                always striving to build innovative solutions that enhance user
                experiences
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default About;
