import React, { useState, useEffect } from "react";
import "./projectDetails.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ProjectDetails = ({ match }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectId = match.params.id;

    // Fetch project details from the API using the projectId
    fetch(`http://localhost:5000/projects/${projectId}`)
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
            <h2 className="pr-title">{project.name}</h2>
          </div>
        </Row>
        <Row className="align-items-center">
          <img
            src={project.url}
            alt="/"
            height="390px"
            style={{
              justifyItems: "center",
              paddingLeft: "400px",
              paddingRight: "400px",
              marginTop: "10px",
            }}
          />

          <div className="project-t">
            <h6 className="pr-description">{project.description}</h6>
            <br></br>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetails;
