import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import AnimatedButton from "./subcomponents/AnimatedButton";
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
            Hello, I'm <span>Pranav Khodhot</span>
          </h1>
          <h6 className="lead pb-2">
            A software developer and web designer
          </h6>
          <AnimatedButton text="Download My Resume"/>
        </Container>
      </div>
    </>
  );
};

export default Hero;
