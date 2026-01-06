import React from "react";


const ExperienceItem = ({ image, date, title, companyName, description, inverted }) => {
    return (
        <li>
      <div className={`linetime-img rounded-circle ${inverted ? "order-last" : ""}`}>
        <img src={image} alt={title} className="img-fluid"/>
      </div>
      <div className={`linetime-panel ${inverted ? "inverted" : ""}`}>
        <div className="linetime-panel-heading">
          <h4>{date}</h4>
        </div>
        <div className="linetime-panel-subheading">
          <h3>{title}</h3>
        </div>
        <div className="linetime-panel-subheading text-secondary">
          <h4>{companyName}</h4>
        </div>
        <div className="linetime-panel-content">
          <p>{description}</p>
        </div>
      </div>
    </li>
    )
    
};

export default ExperienceItem;