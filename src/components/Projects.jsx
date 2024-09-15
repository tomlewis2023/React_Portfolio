import React from "react";
import { Card, Container, Row, Col,Button } from "react-bootstrap";
import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.jpg";
import proj4 from "../assets/proj4.jpg";
import proj5 from "../assets/proj5.jpg";
import proj6 from "../assets/proj6.jpg";


const projects = [
  {
    title: "Project One",
    description: "Kerala Tourism UI/UX design using HTML,CSS & Bootstrap.",
    img: proj1,
    link: "https://tomlewis2023.github.io/keralatourismcss/index.html"
   
  },
  {
    title: "Project Two",
    description: "Myntra UI/UX design using HTML,CSS ",
    img: proj2,
    link: "https://tomlewis2023.github.io/MyntraTom/"
      
    
    
  },
  {
    title: "Project Three",
    description: "Netflix UI/UX design using HTML,CSS",
    img: proj3,
    link: "https://tomlewis2023.github.io/NetflixTom/"
    
  },
  {
    title: "Project Four",
    description: "Weather App Worldwide using Javascript ",
    img: proj4,
    link: "https://tomlewis2023.github.io/weatherapp/"
    
  },
  {
    title: "Project Five",
    description: "Random user Generator using Javascript",
    img: proj5,
    link: "https://tomlewis2023.github.io/FetchApi/"
    
  },
  {
    title: "Project Six",
    description: "FoodApp UI/UX design using HTML,CSS,Bootstrap",
    img: proj6,
    link: "https://tomlewis2023.github.io/FoodcartBootstrap/"
    
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-5"
      style={{ backgroundColor: "#e9ecef" }}
    >
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          {projects.map((project, idx) => (
            <Col key={idx} md={4} className="mb-4 card">
              <Card>
                <Card.Img variant="top" src={project.img} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button href={project.link} target="new" variant="secondary" size="lg" >
                    view
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
