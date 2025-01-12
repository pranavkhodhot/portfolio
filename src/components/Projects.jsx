import React from "react";
import Container from "react-bootstrap/Container";
import ProjectCard from "./subcomponents/ProjectCard";
import { Col, Row } from "react-bootstrap";
const Projects = () => {
  const projects = [
    [
      "QuestGame",
      "Quest Game Web Application",
      "September 2024 - December 2024",
      "Developed interactive Quest Game with a Java + Spring Boot backend and a Node.js frontend, designed to provide an engaging user experience. Project showcases my skills in full-stack development, featuring a robust backend and a dynamic frontend.",
      "https://github.com/pranavkhodhot/quest-game",
    ],
    [
      "Ecommerce",
      "Ecommerce Web Application",
      "November 2024 - December 2024",
      "Created lightweight E-Commerce Web App with a HTML, CSS, and JavaScript frontend and an Express.js + SQLite3 backend. Project demonstrates a fully functional web app with a clean design, responsive layout, and efficient server-side logic.",
      "https://github.com/pranavkhodhot/ecommerce-web-app",
    ],
    [
      "ElectronicStore",
      "Electronic Store Program",
      "March 2022 - April 2022",
      "Simulated electronic store transactions using Java and JavaFX, incorporating OOP principles like inheritance and polymorphism to enhance reusability and maintainability",
      "https://github.com/pranavkhodhot/electronic-store-app",
    ],
    [
      "AED",
      "AED Simulation Program",
      "November 2023 - December 2023",
      "Simulated the AED process using Qt Creator and C++, employing Gang of Four Design Patterns to ensure robust architecture and design with GUI design",
      "https://github.com/danielvlassov/COMP3004-AED-FINAL",
    ],
  ];
  return (
    <div
      className="py-5 my-5 d-flex flex-column align-items-center justify-content-center position-relative z-1"
      style={{ minHeight: "80vh" }}
      id="projects"
    >
      <Container className="text-center">
        <h1 className="display-4 my-5 fw-bold">Feature Projects</h1>
        <Row xs={1} md={2} className="g-4">
          {projects.map((_, idx) => (
            <Col key={idx} className="d-flex">
              <div className="box-wrapper">
                <ProjectCard details={projects[idx]} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
