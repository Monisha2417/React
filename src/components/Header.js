import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image
            src="images/logo-1-removebg-preview.png"
            height="50"  
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="me-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="me-3">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="me-3">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
