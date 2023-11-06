import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./servicesDetails.css";
import Row from "react-bootstrap/Row";
import URL from "../.env/secret";

const ServicesDetails = ({ match }) => {
  const [serviceData, setServiceData] = useState(null);
  console.log("working");
  useEffect(() => {
    const serviceId = match.params.id;
    // Fetch project details from the API using the projectId
    fetch(`${URL}/services/${serviceId}`)
      .then((response) => response.json())
      .then((data) => setServiceData(data));
  }, [match.params.id]);

  if (!serviceData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="mobile">
        <div className="sticky-top bg-white hidden-spacer"> </div>
        <Container fluid>
          <Row>
            <div className="hi-container">
              <div className="row container ">
                <div className="col-lg-6" id="c-container">
                  <span className="taglineD">
                    {serviceData.section1.tagline}
                  </span>
                  <h2 className="sdh">
                    {serviceData.section1.title}
                  </h2>
                  <br></br>
                  <h6 style={{ fontSize: "19px" }}>
                    {serviceData.section1.introduction}
                  </h6>
                  <br></br>
                  <br></br>
                </div>
                <div
                  className="flt col-lg-6 d-flex justify-content-center align-items-end flex-column"
                  style={{ height: "35.5vh" }}
                >
                  <div className="img-fluid">
                    <img
                      src={serviceData.section1.imageURL}
                      alt="/"
                      height="250px"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section className="mobile">
        {" "}
        <br></br>
        <br></br>
        <img
          src={serviceData.section2.imageURL}
          alt="/"
          className="img-fluid custom-image"
        />
        <br></br>
        <br></br>
        <Container fluid >
          <Row>
            <div className="titl">
              <h2 style={{ fontSize: "35px" }}>{serviceData.section3.title}</h2>
              <br></br>
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
                <li key={index} style={{ fontSize: "20px", padding: "8px" }}>
                  {benefit}
                </li>
              ))}
              <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                {serviceData.section3.callToAction}
              </p>
              <br></br>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServicesDetails;
