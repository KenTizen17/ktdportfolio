import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am a member of the  <span className="purple">Ingé+ program</span>{" "}
          which supports BTS students in the <span className="purple">Occitanie</span>
          region who have the potential and motivation to continue their studies—possibly up to engineering school. <br /><br />
            As a <span className="purple">mentor</span>, I work with a small group of 4–5 BTS students, meeting monthly through video calls, emails, and WhatsApp discussion groups. 
            During these sessions, I share my academic journey, daily life in engineering school, and overall student experience. I also provide support in subjects such as Mathematics, French, and English. 
            <br /><br />
            My role is to guide, encourage, and support them in their educational development and help them succeed in their academic paths. 
            <br />
            <br />
          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
