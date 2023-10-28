//projectDetails
import React, { useState, useEffect } from 'react';
import './projectDetails.css';
import movingImage from '../images/2.webp';

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
    <section className="whole">
      {/* <div className="side-heading">Project Details</div> */}
      <h2 className="project-title">{project.name}</h2>
      <div className="project-details-container">
     
        <div className="project-info">
          
          <div className='descriptionbox'>
          <h6 className="project-description">{project.description}</h6>
          <img src={movingImage} alt="/" height="390px" />
          </div>
          
        </div>
        <a
            className="project-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
          </a>
      </div>
    </section>
  );
};
export default ProjectDetails;