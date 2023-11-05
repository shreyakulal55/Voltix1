import React, { useState, useEffect } from "react";
import "./projectDetails.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import URL from "../.env/secret.js";

const ProjectDetails = ({ match }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectId = match.params.id;

    // Fetch project details from the API using the projectId
    fetch(`${URL}/projects/${projectId}`)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, [match.params.id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mobile">
      <Container fluid>
        <Row>
          <div className="col-md-12 text-center">
            <br></br>
            <h2 className="pr-title">{project.name}</h2>
            <br></br>
          </div>
        </Row>
        <Row className="align-items-center">
          <div className="centered-image-container">
            <img src={project.url} alt="/" />
          </div>
          <div className="project-t">
            <h6 className="pr-description ">{project.description}</h6>
            <br></br>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetails;
