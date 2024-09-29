import React from "react";
import { Container, Button } from "react-bootstrap";
import image1 from '../assets/github.png';
import image2 from '../assets/linkedin.png';

const Hero = () => {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
          <img 
            src={image1} 
            className="social_1" 
            alt="github" 
            onClick={() => openLink('https://github.com/tomlewis2023')} 
            style={{ cursor: "pointer" }}
          />
          <img 
            src={image2} 
            className="social_1" 
            alt="linkedin" 
            onClick={() => openLink('https://www.linkedin.com/in/tom-lewis-8550a2330/')} 
            style={{ cursor: "pointer" }}
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
