//AboutUs.js
// import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../images/header-img.svg";
import "./AboutUs.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
const AboutUs = () => {
  return (
    <section className="aboutus" id="aboutus">
      <Container>
        <br />
        <div className="sticky-top  hidden-spacer"> </div>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate_animated animate_fadeIn" : ""}
                >
                  <br></br>
                  <span className="tagline">About Us</span>
                  <h1>
                    {`Digital Transformation to Grow Your Company!
Our versatile team is built of designers, developers and digital marketers who all bring unique experience.`}{" "}
                  </h1>
                  <p>
                    <br />
                    <span className="tagline1">How we work</span>
                    <br />
                    We at Voltix Solution always expect that the most amazing
                    clients from different kinds of trades reach out to us. The
                    ones with exceptional ideas to realize. If you check our
                    client list, we have been successful to get some all along
                    since we started. We find them challenging and improving at
                    the same time. Working on such projects that brings the best
                    out of us has made us what we are today. Our work culture is
                    formed through the constant improvements we have achieved
                    through them. Hence, we are regarded as one of the best web
                    and mobile App developers in Calicut. With us, you can
                    expect more than just an application or a design. What we
                    offer is a carefully crafted solution that serves its
                    purpose right; bring out the outcome our clients expect from
                    them.
                    <br /> <br />
                    <span className="tagline1">What We Do</span>
                    <br />
                    Our services include Web & App development, Branding &
                    design, SEO, Digital marketing, and other
                    related web services.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate_animated animate_zoomIn" : ""}
                >
                  <img class="header-img" src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
