import React from "react";
import { Container, Button } from "react-bootstrap";
import image1 from '../assets/github.png';
import image2 from '../assets/linkedin.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center text-center"
      style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <Container>
        <h1>Hello, I'm Tom</h1>
        <p className="lead">
          A full-stack developer passionate about building efficient and
          user-friendly applications.
        </p>
        <Button className="btn" variant="primary" href="#projects">
          View My Work
        </Button>
        <div className="social">
          <a href="https://github.com/tomlewis2023" target="_blank" rel="noopener noreferrer">
            <img src={image1} className="social_1" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/tom-lewis-8550a2330/" target="_blank" rel="noopener noreferrer">
            <img src={image2} className="social_1" alt="linkedin" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
