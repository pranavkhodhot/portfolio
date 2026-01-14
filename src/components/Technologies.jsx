import React, { useState } from "react";
import Card from "./subcomponents/Card";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

const techData = {
  "Front-End": [
    "React",
    "CSS",
    "Javascript",
    "Typescript",
    "Bootstrap",
    "Tailwind",
    "Vite",
    "Framer",
    "SASS",
    "Angular",
    "Next",
    "ThreeJS"
  ],
  "Back-End": [
    "NodeJS",
    "Python",
    "ExpressJS",
    "C",
    "C++",
    "Java",
    "Spring Boot",
    "FastAPI",
  ],
  "UI/UX": ["Wordpress", "Webflow", "Figma", "Photoshop"],
  Database: ["MongoDB", "MySQL", "SQLite", "Prisma","PostgreSQL", "SQLAlchemy"],
  "Devops/QA": [
    "Cypress",
    "JUnit",
    "Jasmine",
    "Cucumber",
    "Selenium",
    "Playwright",
    "AWS",
    "Docker",
    "Github",
  ],
  "Machine Learning": ["R", "scikit-learn", "Prophet", "Jupyter"],
};

const Technologies = () => {
  const [filter, setFilter] = useState("All");

  const getFilteredItems = () => {
    if (filter === "All") return Object.values(techData).flat().sort();
    return techData[filter].sort();
  };

  const categories = ["All", ...Object.keys(techData)];

  return (
    <section
      className="py-5 text-white position-relative"
      id="technologies"
      style={{ zIndex: 5 }}
    >
      <Container>
        <h1
          className="display-4 text-center my-5 fw-bold text-white"
          style={{
            opacity: 1,
            visibility: "visible",
            position: "relative",
            zIndex: 10,
          }}
        >
          Technologies
        </h1>

        {/* 2. Filter Buttons */}
        <div className="d-flex justify-content-center mb-5">
          <ButtonGroup className="flex-wrap justify-content-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                className={`rounded-pill px-4 shadow-sm category-btn ${
                  filter === cat ? "category-btn-active" : ""
                }`}
                variant="outline-light"
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </ButtonGroup>
        </div>

        {/* 3. Animated Grid */}
        <motion.div
          layout
          className="d-flex flex-wrap justify-content-center gap-4"
        >
          <AnimatePresence mode="popLayout">
            {getFilteredItems().map((name) => (
              <motion.div
                key={name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card name={name} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};

export default Technologies;
