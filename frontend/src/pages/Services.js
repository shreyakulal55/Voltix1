import React, { useState, useEffect } from "react";
import "./Services.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import URL from '../.env/secret';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faCode,
  faLaptop,
  faPalette,
  faVideo,
  faBullhorn,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch projects from the API
    fetch(`${URL}/services`) 
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="full">
      <div className="sticky-top bg-white hidden-spacer"> </div>
      <Container fluid>
        <Row>
          <div className="hi-container">
            <div className="row container ">
              <div className="col-lg-6" id="cm-container">
                <span className="tagline">OUR SERVICES</span>
                <h2 className="heading" style={{ fontWeight: "bold" }}>
                  <br></br>
                  The software development company that puts your needs first.
                </h2>
                <h6 className="disS">
                  Voltix Solution is a Software company offering web and mobile
                  app development, digital marketing, with a skilled team
                  focused on tech-driven solutions.
                </h6>
                <br></br>
                <br></br>
              </div>
              <div
                className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
                style={{ height: "35.5vh" }}
              >
                <img
                  className="img-fluid homeimg"
                  src="https://voltix1.s3.amazonaws.com/service_header.svg"
                  alt="/"
                />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="b-container">
            <div className="row">
              {services.map((service, index) => (
                <div key={index} className="col col-md-4">
                  <div className="service__box pointer">
                    <div className="icon">
                      {service.icon === "faMobile" ? (
                        <FontAwesomeIcon icon={faMobile} color="currentColor" />
                      ) : service.section1.tagline === "WEB DEVELOPMENT" ? (
                        <FontAwesomeIcon icon={faCode} color="currentColor" />
                      ) : service.section1.tagline ===
                        "SOFTWARE DEVELOPMENT" ? (
                        <FontAwesomeIcon icon={faLaptop} color="currentColor" />
                      ) : service.section1.tagline === "UI/UX DESIGN" ? (
                        <FontAwesomeIcon
                          icon={faPalette}
                          color="currentColor"
                        />
                      ) : service.section1.tagline === "VIDEO PRODUCTION" ? (
                        <FontAwesomeIcon icon={faVideo} color="currentColor" />
                      ) : service.section1.tagline === "DIGITAL MARKETING" ? (
                        <FontAwesomeIcon
                          icon={faBullhorn}
                          color="currentColor"
                        />
                      ) : (
                        <FontAwesomeIcon icon={faLaptop} color="currentColor" />
                      )}
                    </div>
                    <div className="service__meta">
                      <h1 className="service__text">
                        {service.section1.tagline}
                      </h1>
                      <p className="p service_text p_color">
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
};

export default Services;
