import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const techIcons = {
  Java: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  JavaScript: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  Python: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
};

const Tag = ({ tech }) => {
  return (
    <div
      className="d-inline-flex align-items-center gap-2 border border-light rounded-pill fw-bold text-white"
      style={{
        background: "transparent",
        borderWidth: "2px",
        fontSize: "16px",
        cursor: "pointer",
        padding: "6px 14px", // Keeps it compact
        maxWidth: "fit-content", // Ensures no extra width
        whiteSpace: "nowrap", // Prevents text wrapping
      }}
    >
        <img
          src={`icons/${tech}.svg`} alt={tech}
          style={{ width: "20px", height: "20px" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `icons/${tech}.png`;
          }}
        />
      {tech}
    </div>
  );
};

export default Tag;
