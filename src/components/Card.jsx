import React from "react";

const Card = (props) => {
  return (
    <div className="d-flex flex-column align-items-center bg-white-50 rounded-2 p-2" style={{ width: "120px", height: "120px", backgroundColor: "rgba(100, 116, 139, 0.1)", transition: "background-color 0.3s" }}>
      <div className="flex-shrink-0 mb-2 justify-content-center">
        <img src={`/icons/${props.name}.svg`} alt={props.name} width="60" height="60" style={{ transform: "translateY(10%)" }} />
      </div>
      <div className="text-center mt-2" style={{ fontSize: "0.9rem" }}>{props.name}</div>
    </div>
  );
};

export default Card;
