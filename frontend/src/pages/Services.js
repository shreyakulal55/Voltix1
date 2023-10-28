import React from 'react';
import './Services.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faCode, faLaptop, faPalette, faVideo, faBullhorn, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons

const goToNewPage = (url) => {
  window.location.href = url;
};

const Services = () => {
  return (
    <section>
      <Container fluid>
      {/* <div className="sticky-top bg-white hidden-spacer"> </div> */}
        <Row>
        <div className="g-container">
            <div className="g-item">
              <div className='title'>
                <h2 style={{ fontSize: "45px" }}>The software development
                  company that puts your needs first.</h2>
                <h6 style={{ fontSize: "19px" }}>
                  Voltix Solution is Software company offering web and mobile app development,
                  digital marketing, with a skilled team focused on tech-driven solutions.
                </h6>
              </div>
            </div>
            <div className="g-item">
              <img src="https://studyrocket.co.uk/assets/img/wp-content/uploads/2017/09/gender-2.svg" alt="/" height="390px" />
            </div>
          </div>
        </Row>
        <Row>
          <div className='container'>
            <div className='row'>
              <div className='col-4'>
                <div className='service__box pointer'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faMobile} color="currentColor" />
                  </div>
                  <div className='service__meta'>
                    <h1 className='service__text'>Mobile App</h1>
                    <p className='p service_text p_color'>
                      Mobile apps are the future of business. If you're not on mobile, you're missing
                      out.
                    </p>
                    <br />
                    <button
                      className="icon-link"
                      type="button"
                      onClick={() => goToNewPage('/mobile')} // Navigate to /page1
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className='service__box pointer'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faCode} color="currentColor" />
                  </div>
                  <div className='service__meta'>
                    <h1 className='service__text'>Web Development</h1>
                    <p className='p service_text p_color'>
                      A well-designed website can help you establish credibility and trust with potential customers
                    </p>
                    <br />
                    <button
                      className="icon-link"
                      type="button"
                      onClick={() => goToNewPage('/web')} // Navigate to /page2
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className='service__box pointer'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faLaptop} color="currentColor" />
                  </div>
                  <div className='service__meta'>
                    <h1 className='service__text'>Software Development</h1>
                    <p className='p service_text p_color'>
                      Software development innovates products, markets, and enhances customer service.
                    </p>
                    <br />
                    <button
                      className="icon-link"
                      type="button"
                      onClick={() => goToNewPage('/soft')} // Navigate to /page2
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className='service__box pointer'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faPalette} color="currentColor" />
                  </div>
                  <div className='service__meta'>
                    <h1 className='service__text'>UI/UX Design</h1>
                    <p className='p service_text p_color'>
                      UI/UX Design
                      A professional UI/UX designer creates user-friendly interfaces, avoiding design mistakes.
                    </p>
                    <br />
                    <button
                      className="icon-link"
                      type="button"
                      onClick={() => goToNewPage('/ui')} // Navigate to /page2
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className='service__box pointer'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faVideo} color="currentColor" />
                  </div>
                  <div className='service__meta'>
                    <h1 className='service__text'>Video Production</h1>
                    <p className='p service_text p_color'>
                      Crafting compelling videos that tell a powerful story, leaving a lasting impact on viewers.
                    </p>
                    <br />
                    <button
                      className="icon-link"
                      type="button"
                      onClick={() => goToNewPage('/video')} // Navigate to /page2
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className='service__box pointer'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faBullhorn} color="currentColor" />
                  </div>
                  <div className='service__meta'>
                    <h1 className='service__text'>Digital Marketing</h1>
                    <p className='p service_text p_color'>
                      Digital marketing is the key to reaching your target audience and growing your business online.
                    </p>
                    <br />
                    <button
                      className="icon-link"
                      type="button"
                      onClick={() => goToNewPage('/digital')} // Navigate to /page2
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
              {/* Repeat for other columns as needed */}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Services;