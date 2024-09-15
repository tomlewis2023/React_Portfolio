import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img from '../assets/img.png'

const PortfolioNavbar = () => {
  return (
    <Navbar bg="white" variant="white" expand="lg" fixed="top" >
      <Container>
        <Navbar.Brand href="#home" className='profile'><img src={img} className='profile' alt="" /> Tom Lewis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home" className='nav'>Home</Nav.Link>
            <Nav.Link href="#projects" className='nav'>Projects</Nav.Link>
            <Nav.Link href="#about" className='nav'>About</Nav.Link>
            <Nav.Link href="#contact" className='nav'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
