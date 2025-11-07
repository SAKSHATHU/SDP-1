import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import rover from "../../Assets/Projects/rover.png";
import ferrari from "../../Assets/Projects/ferrari.png";
import HM from "../../Assets/Projects/HM.png";
import koin from "../../Assets/Projects/koin.png";
import audi from "../../Assets/Projects/audi.png";
import lambo from "../../Assets/Projects/lambo.png";
import benz from "../../Assets/Projects/benz.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">BEAST'S</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few companies 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={koin}
              isBlog={false}
              title="KOENIGSEGG"
              description=""
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rover}
              isBlog={false}
              title="LANDROVER"
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HM}
              isBlog={false}
              title="HINDUSTAN MOTORS"
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lambo}
              isBlog={false}
              title="LAMBORGHINI"
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audi}
              isBlog={false}
              title="AUDI"
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ferrari}
              isBlog={false}
              title="FERRARI"
              description=""
              link=""
/>
</Col>
              <Col md={4} className="project-card">
            <ProjectCard
              imgPath={benz}
              isBlog={false}
              title="LANDROVER"
              description=""
              link=""
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
