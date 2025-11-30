import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import matrix from "../../Assets/Projects/matrix.png"
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import htb from "../../Assets/Projects/HTB.png";
import crtp from "../../Assets/Projects/CRTP.png";
import btl1 from "../../Assets/Projects/BTL1.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent Work at <strong className="purple">Enseeiht </strong>
        </h1>
        <p style={{ color: "white" }}>
        As a Computer Science student, here are a few projects I’ve worked on while at ENSEEIHT INP.
        Keep in mind that some projects are personal and related to my journey in cybersecurity.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matrix}
              isBlog={false}
              title="Matrix"
              description="I developed a chatbot capable of answering technical support questions to help students and school staff efficiently resolve issues. The system automates common support requests, provides instant responses, and reduces workload for the IT team, ultimately improving user experience and support accessibility. "
              ghLink="https://github.com/KenTizen17/Matrix/tree/error-handling"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mcdalang"
              description="A high-level programming language tool designed to help students learn and understand the syntax of multiple programming languages. Students write code in Mcdalang, and the tool converts it into languages like C, C++, Java, and others, enabling them to see how the same logic is expressed across different languages. "
              ghLink="https://github.com/Hugo-CASTELL/mcdalang"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="This Portfolio"
              description="This portfolio is based on a fork of Soumyajit Behera’s GitHub project. The original design was created by him, and I have made several modifications to adapt it to my needs.
Huge credit and thanks to him for his excellent work."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crtp}
              isBlog={true}
              title="CRTP"
              description="Certified Red Team Professional (CRTP) from Altered Security, which I have successfully obtained.
The certification exam is a 24‑hour practical assessment in which the candidate must compromise a simulated corporate Active Directory environment."
              //demoLink="https://plant49-ai.herokuapp.com/"
              ghLink="https://www.credential.net/764f3450-a4ad-45ba-bc23-5d3b6a8b8774#acc.kMOI4Lrp"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={btl1}
              isBlog={true}
              title="BTL1"
              description="Blue Team Level 1 (BTL1) from Security Blue Team, which I have successfully obtained.
This certification includes a hands‑on exam focused on detecting, analyzing, and responding to security incidents in a realistic environment."
              ghLink="https://www.credly.com/org/security-blue-team/badge/blue-team-level-1-btl1"
              //demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={htb}
              isBlog={true}
              title="CPTS (Ongoing)"
              description="The Certified Penetration Testing Specialist (CPTS) is an offensive security certification offered by Hack The Box. It focuses on real-world penetration testing skills and hands-on training. I will publish additional content here once the certification is completed."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              //demoLink="https://blogs.soumya-jit.tech/"      //<--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
