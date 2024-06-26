import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div
        className="py-5 d-flex flex-column align-items-center justify-content-center w-100 min-vh-100"
      >
        <Container className="text-center z-1 pb-5" as={motion.div} initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
          <h1 className="display-1 fw-bold">
            <strong>Hello, I'm Pranav Khodhot</strong>
          </h1>
          <p className="lead">
            A full stack software engineer and web designer
          </p>
          <Button variant="primary" href="/path/to/your/resume.pdf" download>
            Download My Resume
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Hero;
