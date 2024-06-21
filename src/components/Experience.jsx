import React from "react";
import ExperienceList from './subcomponents/ExperienceList'
const Experience = () => {
  const experiences = [
    {
      image: "/icons/Bayshore.svg",
      date: "Jan 2024 - Present",
      title: "Front-end Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      inverted: false,
    },
    {
      image: "icons/Bayshore.svg",
      date: "May 2023 - August 2023",
      title: "QA Intern",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      inverted: true,
    },
    {
      image: "/icons/Bayshore.svg",
      date: "May 2022 - August 2022",
      title: "Software Intern",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      inverted: false,
    },
  ];

  return (
    <section className="page-section position-relative z-1">
      <h1 className="display-4 text-center mb-2 pt-5">Experiences</h1>
      <h6 className="text-black-50 text-center mb-5">For more details you can look on my Resume/CV</h6>
      <div className="container">
        <ExperienceList experiences={experiences} />
      </div>
    </section>
  );
};

export default Experience