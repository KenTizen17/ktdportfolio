import React from "react";
import { Col, Row } from "react-bootstrap";
import whatsapp from "../../Assets/TechIcons/icons8-whatsapp.svg";
import kumo from "../../Assets/TechIcons/kumo.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={whatsapp} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Whatsapp</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={kumo} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">kumospace</div>
      </Col>n

    </Row>
  );
}

export default Toolstack;
