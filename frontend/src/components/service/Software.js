import React from 'react';
import './Software.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Software = () => {
    return (
        <section className='soft'>
            <Container fluid>
                <Row>
                    <div className="g-container">
                        <div className="g-item">
                            <div className='title'>
                            <span className="tagline">SOFTWARE DEVELOPMENT</span>
                                <h2 style={{ fontSize: "45px" }}>The Science
                                    of Software Development</h2>
                                <h6 style={{ fontSize: "19px" }}>
                                    Software's transformative power profoundly shapes our lives, from device functionality and services
                                    to business operations, finance management, communication, and entertainment.
                                </h6>
                            </div>
                        </div>
                        <div className="grid-item">
                            <img style={{ marginLeft: "130px" }} src="https://www.peregrineconnect.com/wp-content/uploads/2021/05/ds-infographic-2.png" alt="/" height="390px" />
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="center-container">
                        <img src="https://i.pinimg.com/originals/6c/26/88/6c268802efdfa3ed2cf7e2c6834a29d9.png" alt="/" />
                    </div>
                </Row>
                <Row>
                    <div>
                        <div className='title'>
                            <h2 style={{ fontSize: "35px" }}>Why Software Development with Our Company is a Good Idea</h2>
                            <p style={{ fontSize: "20px", lineHeight: "35px" }}>Software development is the process of creating, designing, deploying, and supporting software. It is a complex and challenging field, but it is also a very rewarding one. Software developers have the opportunity to create innovative solutions that can improve our lives in many ways.</p>
                            <h2 style={{ fontSize: "20px", color: "blue" }} >Benefits of Having a Software Development for Your Business :</h2>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Experienced and skilled software developers</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Flexible and adaptable Committed to quality</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Free consultation</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Work with you every step of the way</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Provide ongoing support and maintenance</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Committed to customer satisfaction</li>
                            <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                                Software development can be a complex and challenging process, but it can also be very rewarding.
                            </p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default Software;