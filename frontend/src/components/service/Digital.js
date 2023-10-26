import React from 'react';
import './Digital.css'; // Import your CSS file

const Digital = () => {
    return (
        <section>
            <div className="page1">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div>
                            <div className="g-container">
                                <div className="g-item">
                                    <div className='title'>
                                        <h2 style={{ fontSize: "45px" }}>Digital Marketing
                                            The Future of Marketing</h2>
                                        <h6 style={{ fontSize: "19px" }}>
                                            In our digital world, businesses must establish an online presence
                                            through digital marketing to connect with, engage, and convert their audience.
                                        </h6>
                                    </div>
                                </div>
                                <div className="g-item">
                                    <img src="https://surchdigital.com/wp-content/uploads/2023/07/Graphics-03-1024x1024.png" alt="/" height="390px" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="center-container">
                            <img src="https://www.udacity.com/blog/wp-content/uploads/2020/11/Digital-Marketing-Explained_Blog-scaled.jpeg" alt="/" />
                        </div>
                    </div>
                    <div>
                        <div className='title'>
                            <h2 style={{ fontSize: "35px" }}>Why Your Business Needs Digital Marketing in 2023</h2>
                            <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                                Digital marketing is the use of digital channels to reach and engage with potential customers. This can include channels such as search engines, social media, email, and websites. Digital marketing is important because it allows businesses to reach a wider audience than traditional marketing methods, such as print advertising or television commercials. It also allows businesses to target their marketing more precisely, so they can reach the people who are most likely to be interested in their products or services.
                            </p>
                            <h2 style={{ fontSize: "20px", color: "blue" }} >Benefits of Having a Digital Marketing for Your Business :</h2>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Cost-effective.</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Global reach</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Targeted advertising</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Measurable results</li>
                            <li style={{ fontSize: "20px", padding: "8px" }}>Engagement.</li>
                            <p style={{ fontSize: "20px", lineHeight: "35px" }}>
                                If you are not already using digital marketing, I encourage you to start. It is an essential part of any business's marketing strategy in 2023.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Digital;
