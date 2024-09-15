import React from "react";
import ExperienceList from './subcomponents/ExperienceList'
const Experience = () => {
  const experiences = [
    {
      image: "icons/Bayshore.jpeg",
      date: "Jan 2024 - August 2024",
      title: "Web Developer Intern",
      companyName: "Bayshore Healthcare",
      description: "Contributed to front-end development, user interface design, and website creation leading to improving project functionality and overall user experience.",
      inverted: false,
    },
    {
      image: "icons/Bayshore.jpeg",
      date: "May 2023 - August 2023",
      title: "QA Intern",
      companyName: "Bayshore Healthcare",
      description: "Developed automated testing solutions to enhance project stability and data integrity. Integrated secure data management processes and contributed to improving front-end validation and workflow efficiency.",
      inverted: true,
    },
    {
      image: "icons/Bayshore.jpeg",
      date: "May 2022 - August 2022",
      title: "Software Developer Intern",
      companyName: "Bayshore Healthcare",
      description: "Contributed to front-end design and back-end testing, improving user communication and system functionality. Collaborated with teams to streamline project management and enhance development efficiency.",
      inverted: false,
    },
  ];

  return (
    <section className="page-section position-relative z-1" id="experience">
      <h1 className="display-4 text-center mb-2 pt-5">Experiences</h1>
      <h6 className="text-secondary text-center mb-5">
        <span>For more details you can look on my <u><a href="/Pranav_Khodhot___Resume.pdf" download>Resume/CV</a></u></span>
      </h6>
      <div className="container">
        <div className="horizontal-scroll">
          <ExperienceList experiences={experiences} />
        </div>
      </div>
    </section>
  );
};

export default Experience