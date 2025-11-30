import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Ken_TIZEN-CEP.pdf";
import bib from "../../Assets/Ken-CEPBibliography.pdf";
import cvenglish from "../../Assets/CVKEN.pdf";
import cvfrench from "../../Assets/CVKENFrench1.pdf"
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Meet my <strong className="purple">Career Evolution Plan</strong>
        </h1>

        <p style={{ justifyContent: "center"}}>
        This <span className="purple">CEP (Career Evolution Plan)</span> is designed to help me achieve my career goals.
        <br />
        Hopefully, Plan B won’t need to come into play! 😄.{" "} 
            <br/>
            <br/>
            For more information about my previous experience, feel free to download my CV at the bottom of this page.
          </p>
      
        

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1  : 0.9} />
          </Document>
        </Row>

        <Row 
         style={{
          justifyContent: "center",
          position: "relative",
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
        }}
      >

          <Button
            variant="primary"
            href={cvenglish}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; CV (English)
          </Button>

          <Button
            variant="primary"
            href={cvfrench}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; CV (French)
          </Button>
        </Row>

        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple">Bibliography</strong>
        </h1>

        <Row className="resume">
          <Document file={bib} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1  : 0.9} />
          </Document>
        </Row>


      </Container>
    </div>
  );
}

export default ResumeNew;
