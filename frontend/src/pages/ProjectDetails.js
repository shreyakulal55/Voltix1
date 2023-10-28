import React, { useState, useEffect } from 'react';
import './projectDetails.css';

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
      <div className="side-heading">Project Details</div>
      <div className="project-details-container">
        <div className="project-info">
          <h2 className="project-title">{project.name}</h2>
          <div className='descriptionbox'>
          <h6 className="project-description">{project.description}</h6>
          </div>
          <ul className="project-details-list">
            <li>Start Date: {project.start_Date}</li>
            <li>End Date: {project.end_Date}</li>
            <li>Client: {project.client}</li>
            <li>Status: {project.status}</li>
            <li>Team: {project.team.join(', ')}</li>
            <li>Tags: {project.tags.join(', ')}</li>
          </ul>
          <a
            className="project-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProjectDetails;