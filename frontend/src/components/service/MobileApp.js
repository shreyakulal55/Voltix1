import React from 'react';
import './MobileApp.css'; // Import your CSS file
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const MobileApp = () => {
    return (
        <section>
            <Container fluid>
                <div className="sticky-top bg-white hidden-spacer"> </div>
                <Row>
                    <div className="g-container">
                        <div className="g-item">
                            <div className='title'>
                                <h2 style={{ fontSize: "45px" }}>Mobile apps are the new
                                    currency of the digital age</h2>
                                <h6 style={{ fontSize: "19px" }}>
                                    Mobile application development is the process of making software for smartphones,
                                    tablets and digital assistants, most commonly for the Android and iOS operating systems.
                                </h6>
                            </div>
                        </div>
                        <div className="g-item">
                            <img src="https://pentacagroup.com/assets/images/banner-img3.png" alt="/" height="390px" />
                        </div>
                    </div>
                </Row>
                <Row>
                    <div>
                        <div class="center-container">
                            <img src="https://th.bing.com/th/id/R.bb9afecd3d3f53d17853593c242b041a?rik=hngGBAPu%2bx%2fGqw&riu=http%3a%2f%2fzeldathezorse.com%2fwp-content%2fuploads%2f2021%2f03%2ftech.jpg&ehk=qP222W%2fThWyn9BJS%2b%2f5rAIe46d6uLxnBsW%2f0lc0vfzI%3d&risl=&pid=ImgRaw&r=0" alt="/" />
                        </div>
                    </div>
                </Row>
                <Row>
                    <div>
                        <div className='title'>
                            <h2 style={{ fontSize: "35px" }}>Why Mobile Apps Are So Important in Our Lives</h2>
                            <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                                Mobile apps are becoming increasingly important in our lives. They are used for a variety of purposes, such as staying connected with friends and family, getting news and information, shopping, and doing business.
                            </p>
                            <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                                There are many reasons why mobile apps are so important. First, they are convenient. We can use them to access information and services on the go, without having to be tied to our computers. Second, they are interactive. We can interact with mobile apps in ways that we cannot with websites or other forms of media. Third, they are personalized. Mobile apps can be customized to our individual needs and preferences.
                            </p>
                            <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                                For businesses, mobile apps can be a valuable tool for reaching customers, providing customer service, and increasing sales. They can also help businesses to build brand awareness and loyalty.
                            </p>
                            <h2 style={{ fontSize: "20px", color: "blue" }} >Benefits of Having a Mobile App for Your Business :</h2>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Reach a wider audience</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Increase engagement</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Increase sales</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Increase loyalty</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Improve customer service</li>
                            <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                                If you are looking to increase your reach, engagement, sales, and loyalty, then you should consider developing a mobile app for your business. Our mobile app development team can help you create a custom app that meets your specific needs.
                            </p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default MobileApp;
