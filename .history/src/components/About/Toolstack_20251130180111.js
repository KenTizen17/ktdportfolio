import React from "react";
import { Col, Row } from "react-bootstrap";
import windows from "../../Assets/TechIcons/icons8-windows-11.svg";
import kali from "../../Assets/TechIcons/kalilinux-svgrepo-com.svg";
import parrot from "../../Assets/TechIcons/icons8-parrot-security.svg";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={windows} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={kali} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Kali linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={parrot} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">parrot Os</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
