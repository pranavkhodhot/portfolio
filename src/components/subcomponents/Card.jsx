import React from "react";

const Card = (props) => {
  return (
    <div className="d-flex flex-column align-items-center rounded-2 p-2 cardinal" style={{ width: "120px", height: "120px",  transition: "background-color 0.3s" }}>
      <div className="flex-shrink-0 mb-2 justify-content-center">
        <img className="card-img" src={`icons/${props.name}.svg`} alt={props.name}/>
      </div>
      <div className="text-center mt-2 text-white" style={{ fontSize: "0.9rem" }}>{props.name}</div>
    </div>
  );
};

export default Card;
