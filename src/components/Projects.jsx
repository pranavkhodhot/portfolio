import React from "react";
import Container from "react-bootstrap/Container";
import ProjectCard from "./ProjectCard";
import { Col, Row } from "react-bootstrap";
const Projects = () => {
  const projects = [
    [
      "ElectronicStore",
      "Electronic Store Program",
      "March 2022 - April 2022",
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    ],
    [
      "AED",
      "AED Simulation Program",
      "November 2023 - December 2023",
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    ],
    [
      "Lyriks",
      "Lyriks Music Web App",
      "February 2024 - March 2024",
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    ],
    [
      "BookList",
      "Book List Application",
      "March 2024 - April 2024",
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    ]
  ];
  return (
    <div
      className="bg-dark text-light py-5 my-5 d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <Container className="text-center">
        <h1 className="display-4 my-5">Feature Projects</h1>
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
