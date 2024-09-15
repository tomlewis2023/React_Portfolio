import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image from "../assets/mern.png";
import image2 from "../assets/tailwind.png";
import image3 from "../assets/TS.png";
import image4 from "../assets/bootstrap.jpg";

const About = () => {
  return (
    <section id="about" className="py-5 ">
      <Container className="about">
        <Row>
          <Col md={6}>
            <h2>Skills</h2>

            <div className="skill">
              <img className="skill_1" src={image} alt="" />
              <img className="skill_2" src={image2} alt="" />
              <img className="skill_3" src={image3} alt="" />
              <img  className="skill_4" src={image4} alt="" />
            </div>
          </Col>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              I'm a full-stack developer with a strong focus on creating
              efficient and user-friendly applications. I enjoy solving complex
              problems and always strive to keep learning new things. I
              specialize in JavaScript, React, Node.js, and more!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
