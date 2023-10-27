import React from 'react';
import './WebDevelop.css'; // Import your CSS file
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const WebDevelop = () => {
  return (
    <section>
      <Container fluid>
      <div className="sticky-top bg-white hidden-spacer"> </div>
        <Row>
          <div className="g-container">
            <div className="g-item">
              <div className='title'>
                <h2 style={{ fontSize: "45px" }}>We Build Websites
                  That Grow Your Business</h2>
                <h6 style={{ fontSize: "19px" }}>
                  Our team of experts will work with you to understand your
                  needs and create a website that is tailored to your specific business.
                </h6>
              </div>
            </div>
            <div className="g-item">
              <img src="https://www.ejaftech.iq/images/2021/02/21/wan-accelerator.png" alt="/" height="390px" />
            </div>
          </div>
        </Row>
        <Row>
          <div>
            <div className="center-container">
              <img src="https://ai-techpark.com/wp-content/uploads/2023/02/Trellix-Finds-LockBit-960x540.jpg" alt="/" />
            </div>
          </div>
        </Row>
        <Row>
          <div>
            <div className='title'>
              <h2 style={{ fontSize: "35px" }}>Why Your Business Needs a Website</h2>
              <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                A website is a digital space where you can establish an online presence for your business or organization. It can be used to showcase your products or services, provide information about your company, and connect with potential customers. A website is also a great way to build credibility and trust with potential customers.
              </p>
              <h2 style={{ fontSize: "20px", color: "blue" }} >Benefits of Having a Web Development for Your Business :</h2>
              <li style={{ fontSize: "20px", padding: "8px" }}>Build credibility and trust</li>
              <li style={{ fontSize: "20px", padding: "8px" }}>Drive sales</li>
              <li style={{ fontSize: "20px", padding: "8px" }}>Generate leads</li>
              <li style={{ fontSize: "20px", padding: "8px" }}>Increase brand awareness</li>
              <li style={{ fontSize: "20px", padding: "8px" }}>Provide customer support</li>
              <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                If you are a business or organization that does not have a website, or if your current website is outdated or ineffective, I encourage you to invest in a new one. A website is an essential tool for any business or organization that wants to succeed in the digital age.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default WebDevelop;