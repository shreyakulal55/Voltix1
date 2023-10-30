//servicesDetails.js
import React, { useState, useEffect } from 'react';
import './servicesDetails.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ServicesDetails = ({match}) => {
    const [serviceData, setServiceData] = useState(null);
console.log("working");
    useEffect(() => {
        const serviceId = match.params.id;
        // Fetch project details from the API using the projectId
        fetch(`http://localhost:5000/services/${serviceId}`)
          .then((response) => response.json())
          .then((data) => setServiceData(data));
      }, [match.params.id]);
    

    if (!serviceData) {
        return <div>Loading...</div>;
    }

    return (
        <>
          <section className="mobile">
            <Container fluid>
              <Row>
                <div className="g-container">
                  <div className="g-item">
                    <div className="title">
                      <span className="tagline">{serviceData.section1.tagline}</span>
                      <h2 style={{ fontSize: "45px" }}>
                        {serviceData.section1.title}
                      </h2>
                      <h6 style={{ fontSize: "19px" }}>
                        {serviceData.section1.introduction}
                      </h6>
                    </div>
                  </div>
                  <div className="g-item">
                    <img
                      style={{ marginLeft: "150px" }}
                      src={serviceData.section1.imageURL}
                      alt="/"
                      height="390px"
                    />
                  </div>
                </div>
              </Row>
            </Container>
          </section>
          <Row>
            <div className="center-container">
              <img src={serviceData.section2.imageURL} alt="/" />
            </div>
          </Row>
          <section className="mobile">
            <Container fluid>
              <Row>
                <div className="titl">
                  <h2 style={{ fontSize: "35px" }}>
                    {serviceData.section3.title}
                  </h2>
                  {serviceData.section3.content.map((paragraph, index) => (
                    <p key={index} style={{ fontSize: "20px", lineHeight: "35px" }}>
                      {paragraph}
                    </p>
                  ))}
                  <h2 style={{ fontSize: "20px", color: "blue" }}>
                    Benefits of Having a {serviceData.section1.tagline} for Your
                    Business :
                  </h2>
                  {serviceData.section3.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      style={{ fontSize: "20px", padding: "8px" }}
                    >
                      {benefit}
                    </li>
                  ))}
                  <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                    {serviceData.section3.callToAction}
                  </p>
                </div>
              </Row>
            </Container>
          </section>
        </>
      );
    };

export default ServicesDetails;