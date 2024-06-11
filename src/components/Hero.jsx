import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const Hero = () => {
  return (
    <div className="bg-light text-dark py-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Container className="text-center">
        <h1 className="display-4">Pranav Khodhot</h1>
        <p className="lead">A full stack software engineer and web designer</p>
        <Button variant="primary" href="/path/to/your/resume.pdf" download>
          Download My Resume
        </Button>
      </Container>
    </div>
  );
};

export default Hero;