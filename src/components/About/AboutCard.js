import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ken TIZEN DJONGUE</span>{" "}
            from <span className="purple">Toulouse, France</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Security Engineer in apprenticeship</span> at{" "}
            <span className="purple">Ensfea</span>.
            <br />I’m also pursuing an engineering degree in{" "}
            <span className="purple"> Computer Science</span> at {" "}
            <span className="purple">ENSEEIHT INP</span>.
            <br />
            <br />
            Outside of cybersecurity, I love learning new things such as:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Languages (currently improving my English and aiming for German — A2 level)
            </li>
            <li className="about-activity">
              <ImPointRight /> Soft Skills
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
