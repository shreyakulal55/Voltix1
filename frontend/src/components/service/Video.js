import React from 'react';
import './Video.css'; // Import your CSS file
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Video = () => {
    return (
        <section>
            <Container fluid>
                <div className="sticky-top bg-white hidden-spacer"> </div>
                <Row>
                    <div className="g-container">
                        <div className="g-item">
                            <div className='title'>
                                <h2 style={{ fontSize: "45px" }}>We Make Videos
                                    That Get Results</h2>
                                <h6 style={{ fontSize: "19px" }}>
                                    Video promotion service aids businesses in crafting and sharing visually captivating, informative
                                    videos to enhance brand visibility, generate leads, and increase sales.
                                </h6>
                            </div>
                        </div>
                        <div className="g-item">
                            <img src="https://www.nogentech.org/Video-Marketing-Statistics/img/Group.png" alt="/" height="390px" />
                        </div>
                    </div>
                </Row>
                <Row>
                    <div>
                        <div class="center-container">
                            <img src="https://th.bing.com/th/id/R.b1e1f8fd9e694c419f3fbb9b4e571403?rik=M9MzPPi74RKbig&riu=http%3a%2f%2fnayturr.com%2fwp-content%2fuploads%2f2020%2f09%2fart-and-technology-sept012020-min.jpg&ehk=dJ5GSJU%2flfuPTerQr11oa7Q6WbWDZwsEQzxBjPlZin8%3d&risl=&pid=ImgRaw&r=0" alt="/" />
                        </div>
                    </div>
                </Row>
                <Row>
                    <div>
                        <div className='title'>
                            <h2 style={{ fontSize: "35px" }}>Video Promotion Boost Your Business with Visual Content</h2>
                            <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                                we specialize in bringing stories to life through the art of video production. With a passion for creativity and a commitment to excellence, we transform concepts into captivating visual experiences that leave a lasting impact.
                            </p>
                            <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                                Concept Development: Every great video starts with a great idea. Our team of experienced creatives will work closely with you to develop a compelling concept that aligns with your goals and vision.
                            </p>
                            <h2 style={{ fontSize: "20px", color: "blue" }} >Benefits of Having a Video Production for Your Business :</h2>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Enhanced Communication</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Increased Engagement</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Competitive Advantage</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Showcasing Products or Services</li>
                            <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                                BrightTech Solutions is a technology consulting firm that specializes in helping businesses streamline their operations through innovative software solutions. They want to increase their online presence and attract more clients.
                            </p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default Video;