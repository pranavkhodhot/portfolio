import React, { useState } from 'react';
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, ButtonGroup } from "react-bootstrap";
import '../App.css'; // Ensure this points to your CSS file

const Technologies = () => {
  const technologies = [
    ["React", "CSS", "Javascript", "Typescript", "Bootstrap", "Tailwind", "Vite", "Framer Motion", "SASS"],
    ["NodeJS", "Python", "ExpressJS", "AWS", "C", "C++", "Java"],
    ["Wordpress", "Webflow", "Figma", "Photoshop"],
    ["MongoDB", "MySQL"],
    ["R", "SAS", "SPSS"]
  ];
  const [cardItems, setCardItems] = useState(technologies.flat());
  const [activeButton, setActiveButton] = useState("All");

  const selectedItems = (event) => {
    const type = event.target.innerHTML;
    setActiveButton(type);
    if (type === "All") {
      setCardItems(technologies.flat());
    } else if (type === "Front-End") {
      setCardItems(technologies[0]);
    } else if (type === "Back-End") {
      setCardItems(technologies[1]);
    } else if (type === "UI/UX") {
      setCardItems(technologies[2]);
    } else if (type === "Database") {
      setCardItems(technologies[3]);
    } else if (type === "Data Science") {
      setCardItems(technologies[4]);
    }
  };

  return (
    <div className=''>
      <h1 className="display-4 text-center mt-1 pt-5">Technologies</h1>
      <Container
        className="d-flex justify-content-center flex-column my-5"
        style={{ maxWidth: "60%" }}
      >
        <ButtonGroup variant="flat" className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {["All", "Front-End", "Back-End", "UI/UX", "Database", "Data Science"].map((label) => (
            <Button
              key={label}
              variant="flat"
              className={`px-3 py-2 cursor-pointer lg:px-4 lg:py-3 trans rounded-3 btn-flat ${activeButton === label ? 'active' : ''}`}
              onClick={selectedItems}
            >
              {label}
            </Button>
          ))}
        </ButtonGroup>
        <Row className="g-4">
          {cardItems.map((name, index) => (
            <Col
              key={index}
              xs={6}
              sm={5}
              md={4}
              lg={3}
              xl={2}
              className="d-flex justify-content-center"
            >
              <Card name={name} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Technologies;