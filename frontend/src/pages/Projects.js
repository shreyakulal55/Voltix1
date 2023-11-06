//projects.js
// Projects.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import URL from '../.env/secret';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from the API
    fetch(`${URL}/projects`) 
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (<div>
    <section className="full">
    <div className="sticky-top bg-white hidden-spacer"> </div>
      <div className="hi-container">
        <div className="row container ">
          
          <div className="col-lg-6" id='cm-container' style={{ height: "35.5vh" }}>
          <span className="tagline">PROJECTS</span>
            <h2 className='h-heading'> Explore Our Featured Projects.</h2>
            <h6 className='h-head'>
              Discover a collection of our recent projects showcasing innovation and creativity.
            </h6>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column">
            <img className="img-fluid primg" src="https://voltix1.s3.amazonaws.com/2.webp" alt="/" width='350px'/>
          </div>
        </div>
      </div>
    </section>
    <section>

      <Container fluid>
        <Row>
          <div className='b-container'>
            <div className='row'>
              {projects.map((project, index) => (
                <div className="col col-md-4" key={project.id}>
                  <div className="p__box pointer">        
                    <div className="p__meta">
                      <h1 className="p__text">{project.name}</h1>
                      <p className="p p_text p_color">
                        {project.description.slice(0, 30)}...
                      </p>
                      <br />
                      <Link to={`/projects/${project._id}`}>
                        {console.log(project._id)}
                        <button className="icon-link">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  </div>
  );
};

export default Projects;