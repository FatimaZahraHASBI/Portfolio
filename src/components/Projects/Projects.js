import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bank from "../../Assets/Projects/bank.png";
import ecom from "../../Assets/Projects/ecom.png";
import employees from "../../Assets/Projects/employees.png";
import radar from "../../Assets/Projects/radar.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employees}
              isBlog={false}
              title="Employees management App"
              description="Simple web application to manage employees (CRUD operations) and upload report in pdf, html, csv formats. Developed using Spring from the backend, React js for the frontend part, and Jasper soft tool togenerate reports."
              ghLink="https://github.com/FatimaZahraHASBI/ReactJS-Spring-Boot-JasperReport-EmployeesApp"
              demoLink="https://github.com/FatimaZahraHASBI/ReactJS-Spring-Boot-JasperReport-EmployeesApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={radar}
              isBlog={false}
              title="Vehicle speed violations"
              description="Distributed system based on micro-services using an event-driven architecture respecting both Event Sourcing and CQRS patterns. This application makes it possible to manage offenses concerning vehicles following speeding detected by automatic speed cameras."
              ghLink="https://github.com/FatimaZahraHASBI/Distributed-systems-Event-Sourcing-CQRS-AXON-Management-of-speed-infractions-detected-by-radar"
              demoLink="https://github.com/FatimaZahraHASBI/Distributed-systems-Event-Sourcing-CQRS-AXON-Management-of-speed-infractions-detected-by-radar"
            />
          </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Micro Services Architecture -Consul-Config-Gateway-Feign-Resilience4J"
              description="The implementation of an application based on 3 functional micro-services (Customer-service + Order-service + Invetory-service) with the services: Discovery-service(Consul)+Gateway(Spring cloud gateway)+config-service( Spring cloud config)."
              ghLink="https://github.com/FatimaZahraHASBI/Micro-Services-Architecture-Consul-Config-Gateway-Feign-Resilience4J"
              demoLink="https://github.com/FatimaZahraHASBI/Micro-Services-Architecture-Consul-Config-Gateway-Feign-Resilience4J"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Digital-Banking-Spring-Angular"
              description="Web application based on Spring and Angular which allows to manage bank accounts. Each account belongs to a customer. There are two types of accounts: Current and Savings. Each Account may undergo Debit or Credit transactions."
              ghLink="https://github.com/FatimaZahraHASBI/Projet-Digital-Banking-Spring-Angular"
              demoLink="https://github.com/FatimaZahraHASBI/Projet-Digital-Banking-Spring-Angular"
            />
          </Col>

          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
