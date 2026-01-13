import React from "react";

const Card = ({ name }) => {
  return (
    <div 
      className="tech-card d-flex flex-column align-items-center justify-content-center p-3"
      style={{
        width: "110px",
        height: "120px",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        backdropFilter: "blur(5px)",
        transition: "all 0.3s ease"
      }}
    >
      <div className="mb-2" style={{ width: "45px", height: "45px" }}>
        <img 
          src={`icons/${name}.svg`} 
          alt={name} 
          className="img-fluid w-100 h-100 object-fit-contain"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/45?text=?'; }}
        />
      </div>
      <h6 style={{ fontSize: "1rem", fontWeight: "600", textAlign: "center" }} className="mt-2">
        {name}
      </h6>
    </div>
  );
};

export default Card;