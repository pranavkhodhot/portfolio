import React from "react";
import Container from "react-bootstrap/Container";
import ProjectCard from "./subcomponents/ProjectCard";
import { Col, Row } from "react-bootstrap";
import Example from "./subcomponents/TiltCard";
const Projects = () => {
  const projects = [
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
      "Simulated the AED process using Qt Creator and C++, employing Go4 Design Patterns to ensure robust architecture and design",
      "https://github.com/danielvlassov/COMP3004-AED-FINAL"
    ],
    [
      "Lyriks",
      "Lyriks Music Web App",
      "February 2024 - March 2024",
      "Developed a Spotify clone using React and Tailwind, integrated with ShazamCore API for music data, and utilized Redux for state management",
      "https://github.com/pranavkhodhot/rhythm-rise"
    ],
    [
      "BookList",
      "Book List Application",
      "March 2024 - April 2024",
      "Created a full-stack bookstore application with CRUD operations, featuring a React front end and an Express.js and MongoDB backend for seamless user experience.",
      "https://github.com/pranavkhodhot/book-store-application"
    ]
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
            <Col key={idx}>
              <ProjectCard details={projects[idx]}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
