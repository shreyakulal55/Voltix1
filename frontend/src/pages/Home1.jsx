/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Projects.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import URL from "../.env/secret.js";


const Home = () => {
  const [socialfeeds, setSocialfeeds] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [projects, setProjects] = useState([]);
  const [services, setServices]=useState([]);

  useEffect(() => {
    // Fetch services data from your API when the component mounts
    axios
      .get(`${URL}/services`)
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching /services: " + error);
      });
  }, []);


  useEffect(() => {
    // Fetch SocialFeeds data from your API when the component mounts
    axios
      .get(`${URL}/socialfeeds`)
      .then((response) => {
        setSocialfeeds(response.data);
      })
      .catch((error) => {
        console.error("Error fetching /socialfeeds: " + error);
      });
  }, []);

  useEffect(() => {
    // Fetch testimonials data from your API when the component mounts
    axios
      .get(`${URL}/testimonials`)
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials: " + error);
      });
  }, []);

  useEffect(() => {
    // Fetch testimonials data from your API when the component mounts
    axios
      .get(`${URL}/projects`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects: " + error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="intro" className="intro-background">
        <div className="container-flex">
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-md-5 order-md-2 text-center text-md-start">
              <img
                src="https://voltix1.s3.amazonaws.com/back.png"
                alt="back Img"
                className="left-image"
                style={{ maxWidth: "100%" }}
              />

              <div className="col-lg circular-background">
                <h4 className="tag">The Future</h4><br></br>
                <div className="above-text">
                  <div className="display-6 bold-text">
                    Bring your ideas to life!
                  </div>
                </div>
                <div className="below-text">
                  <div className="dis">
                    <p>
                      Our team of talented and highly committed professionals   <br></br>is
                    
                      the key to our success in creating business solutions.&nbsp;&nbsp;
                    </p>
                  </div>
                  <a className="feel btn btn" href="/ContactUs">
                    Feel free to ask
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}

      <section id="services" className="bg-services">
        <div className="container-lg">
          <div className="text-center">
            <br></br>
            <br></br>
            <h2>What we do and why we do it!</h2>
            <p className="lead ">
              Our success in creating business solutions is due in large part to
              <br></br>
              our talented and highly committed team.
            </p>
            <br></br>
            <br></br>
          </div>

          <Container fluid>
          <Row>
          <div className="container-md">
            <div className="row">
              {services.map((service, index) => (
                <div key={index} className="col col-md-4">
                  <div className="s__box pointer">
                  <div className="content-number ">{index+1}</div>
                    <div className="s__meta">
                      <h1 className="s__text">
                        {service.section1.tagline}
                      </h1>
                      <p className="p s_text p_color">
                        {service.section1.title}
                      </p>
                      <br />
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Row>
          </Container>



          

          <br></br>

          <br></br>
        </div>
      </section>

      {/* projects */}

      <section id="projects" className="bg-projects">
        <div className="container-lg">
          <br></br>
          <br></br>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="display-6 bold-txt project-heading">
                Discover our Projects
              </h1>
              <h4 className="p_stat project-subheading">
                Our projects that are a testament to our commitment to
                excellence.
              </h4>
            </div>
            <a className="btn btn-info" href="/Projects">
              View All Projects
            </a>
          </div>

          <br></br>
          <br></br>

          <Container fluid>
            <Row>
              {projects.slice(0, 3).map((project) => (
                <div className="col col-md-4" key={project.id}>
                  <div className="p__box pointer">
                    <div className="p__meta">
                      <h1 className="p__text">{project.name}</h1>
                      <p className="p p_text p_color">
                        {project.description.slice(0, 10)}...
                      </p>
                      <br />
                      <Link to={`/projects/${project._id}`}>
                        {console.log(project._id)}
                        <button className="icon-link">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          </Container>
        </div>{" "}
        <br></br>
        <br></br>
      </section>

      {/* testimonial */}
      <section id="testimonial" className="bg-testimonial">
        <div className="container-lg">
          <div className="text-center">
            <br />
            <br />
            <h2>Trusted by Millions of Customers.</h2>
            <p className="lead">
              Our success in creating business solutions is due in large part to
              <br />
              especially our talented and highly committed team.
            </p>
            <br />
            <br />
          </div>

          <div className="container">
            <div className=" row">
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div className=" col-md-4" key={index}>
                    <div className="card bg-t_box">
                      <div className="card-body t_box">
                        <div className="card-number">{index + 1}</div>
                        <div className="card-t">
                          <br></br>
                          <h2 className="card-name">{testimonial.author}</h2>
                          <br></br>
                          <p className="card-desc">{testimonial.text}</p><br></br>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>

      {/* socialFeeds */}

      <section id="socialfeeds" className="bg-socialfeeds">
        <div className="container-lg">
          <div className="text-left">
            <br></br>
            <br></br>
            <h2>Social Feeds</h2>
            <p className="lead ">Innovating Solutions, Empowering Lives</p>
            <br></br>
            <br></br>
          </div>

          <div className="container">
            <div className="row">
              <Slider {...settings}>
                {socialfeeds.map((socialfeeds, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="card bg-secondary-subtle">
                      <div className="card-body t_box">
                        <img
                          src={socialfeeds.url}
                          className="card-img-top"
                          alt="loading..."
                          style={{
                            justifyItems: "center",
                            height: "200px",
                            objectFit: "cover",
                          }}
                        />

                        <div className="card-t">
                          <h2 className="card-n">{socialfeeds.author}</h2>
                          <p className="card-d">{socialfeeds.content}</p>
                          <h4 className="card-n">{socialfeeds.source}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>{" "}
        <br></br>
        <br></br>
      </section>
    </>
  );
};

export default Home;
