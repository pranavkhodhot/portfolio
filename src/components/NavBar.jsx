import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <> 
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav className="gap-2">
              <Nav.Link href="#about-me" className="text-light">About Me</Nav.Link>
              <Nav.Link href="#technologies" className="text-light">Technologies</Nav.Link>
              <Nav.Link href="#projects" className="text-light">Projects</Nav.Link>
              <Nav.Link href="#experience" className="text-light">Experience</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
