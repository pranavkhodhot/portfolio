import React from "react"
import ExperienceItem from "./ExperienceItem";

const ExperienceList = ({ experiences }) => {
  return (
    <ul className="linetime">
    {experiences.map((experience, index) => (
      <ExperienceItem
        key={index}
        image={experience.image}
        date={experience.date}
        title={experience.title}
        companyName={experience.companyName}
        description={experience.description}
        inverted={experience.inverted}
      />
    ))}
  </ul>
  )
}

export default ExperienceList;