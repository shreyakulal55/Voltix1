import React from 'react';
import './UI.css'; // Import your CSS file
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const UI = () => {
    return (
        <section>
            <Container fluid>
                <div className="sticky-top bg-white hidden-spacer"> </div>
                <Row>
                    <div className="g-container">
                        <div className="g-item">
                            <div className='title'>
                                <h2 style={{ fontSize: "45px" }}>UI/UX Design That
                                    Gets Results</h2>
                                <h6 style={{ fontSize: "19px" }}>
                                    UI/UX design creates visually pleasing, user-friendly interfaces by understanding user needs, crafting
                                    intuitive designs, and validating them for user satisfaction.
                                </h6>
                            </div>
                        </div>
                        <div className="g-item">
                            <img src="https://th.bing.com/th/id/R.c5079f4c0e6a32ca499017654f819e87?rik=Q%2fFmlAcXAkZW1A&riu=http%3a%2f%2fwww.embin.com%2fimages%2fpageheader%2fphp-web-technologies.png&ehk=RnYJzao7nzFCqT7sKi2fWRXfxHfRpoKeRauYOKtHXdk%3d&risl=&pid=ImgRaw&r=0" alt="/" height="390px" />
                        </div>
                    </div>
                </Row>
                <Row>
                    <div>
                        <div class="center-container">
                            <img src="https://cdn.dribbble.com/users/11995070/screenshots/18524301/media/c3e5192f198cbb85984262b3a916091c.png?resize=840x630&vertical=center" alt="/" />
                        </div>
                    </div>
                </Row>
                <Row>
                    <div>
                        <div className='title'>
                            <h2 style={{ fontSize: "35px" }}>UI/UX Design The Key to a Successful Website</h2>
                            <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                                A good looking UI/UX design is important for any website because it makes the website more visually appealing and engaging, easier to use, builds trust and credibility, and can improve conversion rates. A visually appealing website is more likely to capture the attention of visitors and keep them engaged, which can lead to increased time spent on the website and improved SEO rankings. A well-designed UI/UX will make it easy for visitors to find what they are looking for and complete their tasks, which can lead to a better user experience and increased satisfaction and loyalty. A website that looks professional and well-designed will build trust and credibility with visitors, which can make them more likely to do business with the website owner. Finally, a good UI/UX can help to improve conversion rates by making it easier for visitors to take the desired action, such as making a purchase or signing up for a newsletter.
                            </p>
                            <h2 style={{ fontSize: "20px", color: "blue" }} >Benefits of Having a UI/UX Design for Your Business :</h2>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Increased user satisfaction</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Increased sales</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Decreased customer support costs</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Improved brand reputation</li>
                            <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                                By focusing on the user experience, UI/UX designers can create products and services that are more enjoyable to use and more likely to be successful
                            </p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default UI;