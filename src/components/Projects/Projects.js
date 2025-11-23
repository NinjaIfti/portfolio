import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/metro.jpg";
import emotion from "../../Assets/Projects/mask.png";
import editor from "../../Assets/Projects/felix.jpg";
import onecs from "../../Assets/Projects/1cs.jpg";
import suicide from "../../Assets/Projects/ml.jpg";
import bitsOfCode from "../../Assets/Projects/gh.jpg";
import arfan from "../../Assets/Projects/arfan.jpg";
import zawajAfrica from "../../Assets/Projects/zawajafrica.jpg";
import print from "../../Assets/Projects/print.png";
import expressBuy from "../../Assets/Projects/express.png";
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
              imgPath={zawajAfrica}
              isBlog={false}
              title="ZawajAfrica"
              description="ZawajAfrica is a Matrimonial platform that allows users to find their perfect match based on their interests and preferences. It is a web application that is built with laravel, tailwind css, and mysql. "
              ghLink="https://zawajafrica.online/login"
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
              imgPath={arfan}
              isBlog={false}
              title="Arfan Express Ltd"
              description="Arfan Express Ltd is a logistic system that allows users to manage their logistic based on React, Node.js, and JavaScript. Have features which allows user for realtime messaging, trasaction, and tracking of their products."
              ghLink=""
              demoLink="https://www.arfanexpressbd.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={print}
              isBlog={false}
              title="Brand New Print "
              description="Brand New Print is a printing system that allows users to manage their printing based on laravel , tailwind css, and mysql. Have features which allows user for realtime select the product,print type realtime email delivert and multiple language support payment gateway and trasaction, and tracking of their products."
              ghLink=""
              demoLink="https://login.brandnewprint.com/login"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expressBuy}
              isBlog={false}
              title="Express Buy "
              description="Express Buy is a Cryptocurrency trading platform that allows users to manage their crypto wallet it is built with Laravel, Livewire, Mysql and javascript. Have features which allows user to buy and sell crypto, realtime email delivery, multiple language support payment gateway and trasaction, and withdrawing."
              ghLink=""
              demoLink="https://expresbuy.com/"              
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
              description="A computer vision project that uses YOLO object detection model to identify safety mask from live camera feed. The model is trained on a custom dataset of 1000 images and 1000 images for validation."
              ghLink="https://github.com/NinjaIfti/Face-Mask-Detection-YoloV5"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
