import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a computer science student with a strong interest in cybersecurity.
              <br />
              <br />
              I have a solid understanding of 
              <i>
                <b className="purple">
                  {" "}
                  Windows and Linux operating system{" "}
                </b>
              </i>
              — and I enjoy breaking things to learn how they work.
              <br />
              <br />
              My key areas of interest include 
              <i>
                <b className="purple">
                  {" "}
                  Active Directory, web applications security ,{" "}
                </b>
              </i>
              and building defenses to protect company assets.
              <br />
              <br />
              In my free time, I love learning on
              <b className="purple"> Hack The Box </b>{" "}
              <br />
              My Homelab is <b className="purple"> Hack The Box </b> academy{" "}

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
