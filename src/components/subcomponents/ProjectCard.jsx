import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = (props) => {
  return (
    <Card className="mb-4 border-0 bg-dark text-white project-card" onClick={()=> window.open(props.details[4], "_blank")}>
      <Card.Img
        variant="top"
        src={`/projects/${props.details[0]}.png`}
        height={300}
        alt="Project Image"
      />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title className="mb-0">{props.details[1]}</Card.Title>
          <small className="text-light">{props.details[2]}</small>
        </div>
        <Card.Text className="mt-2 text-start mt-3">{props.details[3]}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
