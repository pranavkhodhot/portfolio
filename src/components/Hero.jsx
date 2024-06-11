import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import SplineTest from './SplineTest';

const Hero = () => {
  return (
    <>
    <SplineTest/>
    <div className="text-light position-absolute py-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', width: '100%' }}>
      <Container className="text-center">
        <h1 className="display-4"><strong>Pranav Khodhot</strong></h1>
        <p className="lead">A full stack software engineer and web designer</p>
        <Button variant="primary" href="/path/to/your/resume.pdf" download>
          Download My Resume
        </Button>
      </Container>
    </div>
    </>
  );
};

export default Hero;