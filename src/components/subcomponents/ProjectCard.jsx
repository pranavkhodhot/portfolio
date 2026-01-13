import React from "react";
import Card from "react-bootstrap/Card";
import Tag from "./Tag";

const ProjectCard = (props) => {
  console.log(props)
  return (
    <Card className="flex-fill border-0 bg-dark text-white project-card d-flex flex-column" onClick={() => window.open(props.details[4], "_blank")}>
      <Card.Img
        variant="top"
        src={`projects/${props.details[0]}`}
        alt="Project Image"
        className="project-img"
      />
      <Card.Body className="d-flex flex-column">
        <div className="pb-3">
          <Card.Title className="mb-2">{props.details[1]}</Card.Title>
          <small className="text-light">{props.details[2]}</small>
        </div>
        <div className="d-flex gap-2 justify-content-center flex-wrap">
        {props.details[5].map((name, index) => (
            <Tag
              key={index}
              tech={name}
            />

          ))}
        </div>
        <Card.Text className="mt-2 text-start mt-3 flex-grow-1">{props.details[3]}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
