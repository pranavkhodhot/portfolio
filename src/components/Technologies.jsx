import React from "react";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Button, ButtonGroup } from "react-bootstrap";

const Technologies = () => {
  const cardItems = [
    "AWS",
    "React",
    "Vite",
    "NodeJS",
    "TailwindCSS",
    "CSS",
    "Javascript",
    "Python",
    "Docker",
    "Typescript",
    "Framer Motion",
    "ExpressJS",
    "MySQL",
  ];

  return (
    <>
      <h1 className="display-4 text-center my-5">Technologies</h1>
      <Container
        className="d-flex justify-content-center flex-column"
        style={{ maxWidth: "80%" }}
      >
        <ButtonGroup className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          <Button
            className="px-3 py-2 cursor-pointer lg:px-4 lg:py-3 trans hover:bg-slate-200/20 rounded-lg">
            All
          </Button>
          <Button className="px-3 py-2 cursor-pointer lg:px-4 lg:py-3 trans hover:bg-slate-200/20 rounded-lg">
            Front-End
          </Button>
          <Button className="px-3 py-2 cursor-pointer lg:px-4 lg:py-3 trans hover:bg-slate-200/20 rounded-lg">
            DevOps
          </Button>
          <Button className="px-3 py-2 cursor-pointer lg:px-4 lg:py-3 trans hover:bg-slate-200/20 rounded-lg">
            Back-End
          </Button>
          <Button className="px-3 py-2 cursor-pointer lg:px-4 lg:py-3 trans hover:bg-slate-200/20 rounded-lg">
            Database
          </Button>
          <Button className="px-3 py-2 cursor-pointer lg:px-4 lg:py-3 trans hover:bg-slate-200/20 rounded-lg">
            Data Science
          </Button>
        </ButtonGroup>
        <Row className="g-2">
          {cardItems.map((name, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              className="d-flex justify-content-center"
            >
              <Card name={name} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Technologies;
