import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/metro.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/felix.jpg";
import onecs from "../../Assets/Projects/1cs.jpg";
import suicide from "../../Assets/Projects/ml.jpg";
import bitsOfCode from "../../Assets/Projects/gh.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onecs}
              isBlog={false}
              title="1Contractor A Permitting Software"
              description="1Contractor is a permitting software that helps contractors to manage their permits and inspections. It is a web application that is built with React.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/NinjaIfti/1-Construction"
              demoLink="hhttp://1cshub.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Graphic Editor"
              description="Graphic Editor is a web application based on fabric js that allows users to create and edit pictures text, shapes, and images. It is a web application that is built with Alpine.js, Tailwind CSS, and Fabric js. "
              ghLink="https://github.com/NinjaIfti/Graphic-Editor"
              demoLink="https://graphic-editor-git-main-iftikhar-ahmeds-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Felix Bus"
              description="Felix Bus is a bus booking system that allows users to book buses for their travel based on PHP, MySQL, and JavaScript. Have features which allows user for realtime messaging, trasaction, and tracking of bus."
              ghLink="https://github.com/NinjaIfti/FelixBusProject"
              demoLink="https://seagreen-duck-179448.hostingersite.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Dhaka Metro Rail QR Code Ticketing System"
              description="Dhaka Metro Rail QR Code Ticketing System is a Laravel web application that allows users to book tickets for Dhaka Metro Rail. Have features which allows user for see the schudele, map even see annoucment and news for Dhaka Metro Rail."
              ghLink="https://github.com/NinjaIfti/Metro-Rail-QR-Code-Ticketing-System"
              demoLink="https://lavender-raccoon-436283.hostingersite.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Safety Equipment Detection using Machine Learning"
              description="A computer vision project that uses YOLO object detection model to identify safety equipment like helmets, vests, and gloves in construction sites. This system helps ensure worker safety by automatically monitoring compliance with safety regulations."
              ghLink="https://github.com/NinjaIfti/Safery-Equipment-Detection-"
                        />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Safety Mask Detection using YOLOV5"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/NinjaIfti/Face-Mask-Detection-YoloV5"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
