import React, { useRef, useEffect, useState, useCallback } from 'react';
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, ButtonGroup } from "react-bootstrap";

const Technologies = () => {
  const technologies = [
    ["React", "CSS", "Javascript", "Typescript", "Bootstrap", "TailwindCSS", "Vite", "Framer Motion","SASS"],
    ["NodeJS", "Python", "ExpressJS", "AWS", "C", "C++", "Java"],
    ["Wordpress", "Webflow", "Figma", "Photoshop"],
    ["MongoDB", "MySQL"],
    ["R", "SAS", "SPSS"]
  ];
  const [cardItems, setcardItems] = useState(technologies[0].concat(technologies[1], technologies[2], technologies[3], technologies[4]))

  const selectedItems = (event) => {
    const type = event.target.innerHTML;
    if (type == "All") {
      setcardItems(technologies[0].concat(technologies[1], technologies[2], technologies[3], technologies[4]))
      console.log(cardItems)
    } else if (type == "Front-End") {
      setcardItems(technologies[0])
    } else if (type == "Back-End") {
      setcardItems(technologies[1])
    } else if (type == "UI/UX") {
      setcardItems(technologies[2])
    } else if (type == "Database") {
      setcardItems(technologies[3])
    } else if (type == "Data Science") {
      setcardItems(technologies[4])
    }
  }

  return (
    <div className='min-height'>
      <h1 className="display-4 text-center mt-1 pt-5 text-light">Technologies</h1>
      <Container
        className="d-flex justify-content-center flex-column text-light my-5"
        style={{ maxWidth: "40%" }}
      >
        <ButtonGroup variant="flat" className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          <Button
            variant="flat"
            className="px-3 py-2 cursor-pointer lg:px-4 lg:py-3 trans rounded-3 btn-primary"
            onClick={selectedItems}>
            All
          </Button>
          <Button variant="flat" className="px-3 py-2 cursor-pointer lg:px-4 lg:py-3 trans rounded-3 btn-primary" onClick={selectedItems}>
            Front-End
          </Button>
          <Button variant="flat" className="px-3 py-2 cursor-pointer lg:px-4 lg:py-3 trans rounded-3 btn-primary" onClick={selectedItems}>
            Back-End
          </Button>
          <Button variant="flat" className="px-3 py-2 cursor-pointer lg:px-4 lg:py-3 trans rounded-3 btn-primary" onClick={selectedItems}>
            UI/UX
          </Button>
          <Button variant="flat" className="px-3 py-2 cursor-pointer lg:px-4 lg:py-3 trans rounded-3 btn-primary" onClick={selectedItems}>
            Database
          </Button>
          <Button variant="flat" className="px-3 py-2 cursor-pointer lg:px-4 lg:py-3 trans rounded-3 btn-primary" onClick={selectedItems}>
            Data Science
          </Button>
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
