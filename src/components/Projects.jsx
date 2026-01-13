import React from "react";
import Container from "react-bootstrap/Container";
import ProjectCard from "./subcomponents/ProjectCard";
import { Col, Row } from "react-bootstrap";
const Projects = (props) => {
  const projects = [
    [
      "ExpenseTracker.png",
      "Expense Tracker Application",
      "August 2025 - January 2026",
      "Developed an intelligent Expense Tracker web application with a FastAPI backend and a Next.js + TypeScript frontend, designed to help users manage budgets, track expenses, and gain AI-powered financial insights. The project showcases full-stack development expertise, secure authentication, and a machine learning.",
      "https://github.com/pranavkhodhot/expense-tracker-app",
      ["Next","Typescript","Python","FastAPI","SQLite","Tailwind","scikit-learn"]
    ],
    [
      "Ecommerce.gif",
      "Ecommerce Web Application",
      "November 2024 - December 2024",
      "Created lightweight E-Commerce Web App with a HTML, CSS, and JavaScript frontend and an Express.js + SQLite3 backend. Project demonstrates a fully functional web app with a clean design, responsive layout, and efficient server-side logic.",
      "https://github.com/pranavkhodhot/ecommerce-web-app",
      ["Angular","Typescript","Tailwind","ExpressJS","Prisma","MySQL","Playwright"]
    ],
    [
      "QuestGame.gif",
      "Quest Game Web Application",
      "September 2024 - December 2024",
      "Developed interactive Quest Game with a Java + Spring Boot backend and a React + Typescript, designed to provide an engaging user experience. Project showcases my skills in full-stack development, featuring a robust backend and a dynamic frontend.",
      "https://github.com/pranavkhodhot/quest-game",
      ["React","Typescript","Java","Spring Boot","Selenium","JUnit","Cucumber"]
    ],
    
    [
      "AED.gif",
      "AED Simulation Program",
      "November 2023 - December 2023",
      "Simulated the AED process using Qt Creator and C++, employing Gang of Four Design Patterns to ensure robust architecture and design with GUI design",
      "https://github.com/danielvlassov/COMP3004-AED-FINAL",
      ["C++","Qt"]

    ],
    [
      "ElectronicStore.gif",
      "Electronic Store Program",
      "March 2022 - April 2022",
      "Simulated electronic store transactions using Java and JavaFX, incorporating OOP principles like inheritance and polymorphism to enhance reusability and maintainability",
      "https://github.com/pranavkhodhot/electronic-store-app",
      ["Java","JavaFX"]

    ],
    [
      "SnakeGame.gif",
      "Snake Game",
      "October 2019",
      "Created user friendly and playable Snake Game with Python and Pygame faciliating proper game archetecture with well written code",
      "https://github.com/pranavkhodhot/electronic-store-app",
      ["Python"]

    ],
  ];

  const displayedProjects = props.all ? projects.slice(0,4) : [...projects]
  return (
    <div
      className="py-5 my-5 d-flex flex-column align-items-center justify-content-center position-relative z-1"
      style={{ minHeight: "80vh" }}
      id="projects"
    >
      <Container className="text-center">
        <h1 className="display-4 my-5 fw-bold">Feature Projects</h1>
        <Row xs={1} md={2} className="g-4">
          {displayedProjects.map((_, idx) => (
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
