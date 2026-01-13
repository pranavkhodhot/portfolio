import React from "react";
import ExperienceList from './subcomponents/ExperienceList'
const Experience = () => {
  const experiences = [
    {
      image: "icons/Appfabs.png",
      date: "May 2025 - August 2025",
      title: "Full Stack Developer",
      companyName: "AppFabs Inc",
      description: "Designed and developed a responsive ReactJS web application with Docker-based containerization, streamlining the deployment process. Integrated backend APIs with frontend components to enable real-time data rendering and deliver a seamless user experience across dynamic dashboard views.",
      inverted: false,
    },
    {
      image: "icons/Bayshore.jpeg",
      date: "Jan 2024 - August 2024",
      title: "Web Developer Intern",
      companyName: "Bayshore Healthcare Ltd",
      description: "Contributed to front-end development, user interface design, and website creation leading to improving project functionality and overall user experience.",
      inverted: true,
    },
    {
      image: "icons/Bayshore.jpeg",
      date: "May 2023 - August 2023",
      title: "QA Automation Engineer Intern",
      companyName: "Bayshore Healthcare Ltd",
      description: "Developed automated testing solutions to enhance project stability and data integrity. Integrated secure data management processes and contributed to improving front-end validation and workflow efficiency.",
      inverted: false,
    },
    {
      image: "icons/Bayshore.jpeg",
      date: "June 2022 - August 2022",
      title: "Software Developer Intern",
      companyName: "Bayshore Healthcare Ltd",
      description: "Contributed to front-end design and back-end testing, improving user communication and system functionality. Collaborated with teams to streamline project management and enhance development efficiency.",
      inverted: true,
    },
  ];

  return (
    <section className="position-relative z-1" id="experience">
      <h1 className="display-4 text-center mb-2 pt-5 fw-bold">Experiences</h1>
      <h6 className="text-secondary text-center mb-5">
        <span>For more details you can look on my <u><a href="Pranav_Khodhot___Resume.pdf" download>Resume/CV</a></u></span>
      </h6>
      <div className="container">
        <div className="horizontal-scroll">
          <ExperienceList experiences={experiences} />
        </div>
      </div>
      <p className="text-center pt-5">&copy; 2026 Pranav Khodhot. All rights reserved.</p>
    </section>
  );
};

export default Experience
