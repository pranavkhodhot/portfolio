import React from "react";


const ExperienceItem = ({ image, date, title, description, inverted }) => {
    return (
        <li>
      <div className={`linetime-img rounded-circle ${inverted ? "order-last" : ""}`}>
        <img src={image} alt={title} className="img-fluid" />
      </div>
      <div className={`linetime-panel ${inverted ? "inverted" : ""}`}>
        <div className="linetime-panel-heading text-white">
          <h2>{date}</h2>
        </div>
        <div className="linetime-panel-subheading text-white">
          <h2>{title}</h2>
        </div>
        <div className="linetime-panel-content">
          <p className="text-white">{description}</p>
        </div>
      </div>
    </li>
    )
    
};

export default ExperienceItem;