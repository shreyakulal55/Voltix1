import React, { useState, useEffect } from 'react';
import './Services.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome icons
import { faMobile, faCode, faLaptop, faPalette, faVideo, faBullhorn, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch projects from the API
    fetch('http://localhost:5000/services')
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);


  return (
    <section className='full'>
      <Container fluid>
        <Row>
          <div className="g-container">
            <div className="g-item">
              <div className='title'>
                <span className="tagline">OUR SERVICES</span>
                <h2 style={{ fontSize: "45px" }}>
                  The software development
                  company that puts your needs first.
                </h2>
                <h6 style={{ fontSize: "19px" }}>
                  Voltix Solution is a Software company offering web and mobile app development,
                  digital marketing, with a skilled team focused on tech-driven solutions.
                </h6>
              </div>
            </div>
            <div className="g-item">
              <img src="https://studyrocket.co.uk/assets/img/wp-content/uploads/2017/09/gender-2.svg" alt="/" height="390px" />
            </div>
          </div>
        </Row>
        <Row>
          <div className='container'>
            <div className='row'>
              {services.map((service, index) => (
                <div key={index} className='col-4'>
                  <div className='service__box pointer'>
                    <div className='icon'>
                    {service.icon === 'faMobile' ? (
                <FontAwesomeIcon icon={faMobile} color="currentColor" />
              ) : service.section1.tagline === 'WEB DEVELOPMENT' ? (
                <FontAwesomeIcon icon={faCode} color="currentColor" />
              ) : service.section1.tagline ==='SOFTWARE DEVELOPMENT'?(
                <FontAwesomeIcon icon={faLaptop} color="currentColor" />
              ): service.section1.tagline ==='UI/UX DESIGN'?(
                <FontAwesomeIcon icon={faPalette} color="currentColor" />
              ): service.section1.tagline ==='VIDEO PRODUCTION'?(
                <FontAwesomeIcon icon={faVideo} color="currentColor" />
              ): service.section1.tagline ==='DIGITAL MARKETING'?(
                <FontAwesomeIcon icon={faBullhorn} color="currentColor" />
              ):(
                <FontAwesomeIcon icon={faLaptop} color="currentColor" />
              )}
                    </div>
                    <div className='service__meta'>
                      <h1 className='service__text'>{service.section1.tagline}</h1>
                      <p className='p service_text p_color'>
                        {service.section1.title}
                      </p>
                      <br />
                      <a
                        className="icon-link"
                        href={`/services/${service._id}`}
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Services;