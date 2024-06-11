import React from 'react'
import Container from 'react-bootstrap/Container';

const Projects = () => {
  return (
    <div className="bg-light text-dark py-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Container className="text-center">
        <h1 className="display-4">Feature Projects</h1>
      </Container>
    </div>
  );
}

export default Projects