//projects.js
// Projects.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import movingImage from '../images/2.webp';
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from the API
    fetch('http://localhost:5000/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (<div>
    {/* <h1 className='display-5 text-center mx-auto font-weight-bold custom-heading'>Projects</h1> */}
    <section className="introduction-section" style={{marginTop:"20px"}}>
    <div className="g-container">
            <div className="g-item">
              <div className='title'>
                <h2 style={{ fontSize: "45px" }}> Explore Our Featured Projects.</h2>
                <h6 style={{ fontSize: "19px" }}>
                Discover a collection of our recent projects showcasing innovation and creativity.
                </h6>
              </div>
            </div>
            <div className="g-item">
              <img src={movingImage} alt="/" height="390px" />
            </div>
          </div>
      </section>
    <section>
      
    <Container fluid>
            <Row>
              {projects.slice(0,3).map((project,index) => (
                <div className="col-4" key={project.id}>
                  <div className="p__box pointer">
                 
                  {/* <div className="content-number ">{index+1}</div> */}
                    <div className="p__meta">
                      <h1 className="p__text">{project.name}</h1>
                      <p className="p p_text p_color">
                        {project.description.slice(0, 10)}...
                      </p>
                      <br />
                      <Link to={`/projects/${project._id}`}>
                        {console.log(project._id)} {/* Use Link to navigate */}
                        <button className="icon-link">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          </Container>
    </section>
    </div>
  );
};

export default Projects;