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
import URL from "../.env/secret.js"
// import back from "../images/back.png";
// import "../images/back.png";

const Home = () => {
  const [socialfeeds, setSocialfeeds] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [projects, setProjects] = useState([]);

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
    slidesToShow: 3, // Display 3 testimonials at a time
    slidesToScroll: 1,
  };
  return (
    <>
      <section id="intro" className="intro-background">
        {/* <div className="sticky-top bg-white hidden-spacer"></div> */}
        <div className="container-lg">
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-md-5 order-md-2 text-center text-md-start">
              <img src="https://voltix1.s3.amazonaws.com/back.png" alt="back Img" className="left-image" />
              <div className="circular-background">
                <h4 className="tag">The Future</h4>
                <div className="above-text">
                  <div className="display-6 bold-text">
                    Bring your ideas to life!
                  </div>
                </div>
                <div className="below-text">
                  <div className="dis">
                    <p>
                      Our team of talented and highly committed professionals is
                      <br></br>
                      the key to our success in creating business solutions.
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

          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="s__box pointer">
                  <div className="content-number ">1</div>
                  <div className="s__meta">
                    <h1 className="s__text">Mobile App</h1>
                    <p className="p s_text p_color">
                      Mobile apps are essential for modern business success.
                      Ignoring mobile means missed opportunities.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="s__box pointer">
                  <div className="content-number ">2</div>
                  <div className="s__meta">
                    <h1 className="s__text">Web Development</h1>
                    <p className="p s_text p_color">
                      A well-designed website can help you establish credibility
                      and trust with potential customers
                    </p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="s__box pointer">
                  <div className="content-number ">3</div>
                  <div className="s__meta">
                    <h1 className="s__text">Software Development</h1>
                    <p className="p s_text p_color">
                      Software development innovates products, markets, and
                      enhances customer service.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="s__box pointer">
                  <div className="content-number ">4</div>
                  <div className="s__meta">
                    <h1 className="s__text">UI/UX Design</h1>
                    <p className="p s_text p_color">
                      UI/UX Design A professional UI/UX designer creates
                      user-friendly interfaces, avoiding design mistakes.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="s__box pointer">
                  <div className="content-number ">5</div>
                  <div className="s__meta">
                    <h1 className="s__text">Video Production</h1>
                    <p className="p s_text p_color">
                      Crafting compelling videos that tell a powerful story,
                      leaving a lasting impact on viewers.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="s__box pointer">
                  <div className="content-number ">6</div>
                  <div className="s__meta">
                    <h1 className="s__text">Digital Marketing</h1>
                    <p className="p s_text p_color">
                      Digital marketing is the key to reaching your target
                      audience and growing your business online.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

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
              {projects.slice(0, 3).map((project, index) => (
                <div className="col-4" key={project.id}>
                  <div className="p__box pointer">
                    {/* <div className="content-number ">{index+1}</div> */}
                    <div className="p__meta">
                      <h1 className="p__text">{project.name}</h1>
                      <p className="p p_text p_color">
                        {project.description.slice(0, 10)}...
                      </p>
                      <br />
                      <Link to={`/projects/${project._id}`}>
                        {console.log(project._id)} {/* Use Link to navigate */}
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
            <br></br>
            <br></br>
            <h2>Trusted by Millions of Customers.</h2>
            <p className="lead ">
              Our success in creating business solutions is due in large part
              <br></br>
              spacially to talented and highly committed team.
            </p>
            <br></br>
            <br></br>
          </div>

          <div className="container">
            <div className="row">
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div className="col-md-4 " key={index}>
                    <div className="card bg-t_box">
                      <div className="card-body t_box">
                        <div className="card-number">{index + 1}</div>
                        <div className="card-t">
                          <h2 className="card-name">{testimonial.author}</h2>
                          <p className="card-desc">{testimonial.text}</p>
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




/* eslint-disable react/jsx-no-undef */
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Home.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import "./Projects.css";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// const Home = () => {
//   const [socialfeeds, setSocialfeeds] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     // Fetch SocialFeeds data from your API when the component mounts
//     axios
//       .get("http://localhost:5000/socialfeeds")
//       .then((response) => {
//         setSocialfeeds(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching /socialfeeds: " + error);
//       });
//   }, []);

//   useEffect(() => {
//     // Fetch testimonials data from your API when the component mounts
//     axios
//       .get("http://localhost:5000/testimonials")
//       .then((response) => {
//         setTestimonials(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching testimonials: " + error);
//       });
//   }, []);

//   useEffect(() => {
//     // Fetch testimonials data from your API when the component mounts
//     axios
//       .get("http://localhost:5000/projects")
//       .then((response) => {
//         setProjects(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching projects: " + error);
//       });
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Display 3 testimonials at a time
//     slidesToScroll: 1,
//   };

//   return (
//     <>
//       <section id="intro" className="intro-background">
//         <div className="container-lg">
//           <div className="row g-4 justify-content-center align-items-center">
//             <div className="col-md-5 order-md-2 text-center text-md-start">
//               <img src="https://voltix1.s3.amazonaws.com/back.png" alt="back Img" className="left-image" />
//               <div className="circular-background">
//                 <h4 className="tag">The Future</h4>
//                 <div className="above-text">
//                   <div className="display-6 bold-text">
//                     Bring your ideas to life!
//                   </div>
//                 </div>
//                 <div className="below-text">
//                   <div className="dis">
//                     <p>
//                       Our team of talented and highly committed professionals is
//                       the key to our success in creating business solutions.
//                     </p>
//                   </div>
//                   <a className="feel btn btn" href="/ContactUs">
//                     Feel free to ask
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* services */}
//       <section id="services" className="bg-services">
//         <div className="container-lg">
//           <div className="text-center">
//             <h2>What we do and why we do it!</h2>
//             <p className="lead">
//               Our success in creating business solutions is due in large part to
//               our talented and highly committed team.
//             </p>
//           </div>
//           <div className="container">
//             <div className="row">
//               {Array.from({ length: 6 }, (_, index) => (
//                 <div className="col-12 col-md-4" key={index}>
//                   <div className="s__box pointer">
//                     <div className="content-number ">{index + 1}</div>
//                     <div className="s__meta">
//                       <h1 className="s__text">Service Title</h1>
//                       <p className="p s_text p_color">
//                         Service description goes here.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* projects */}
//       <section id="projects" className="bg-projects">
//         <div className="container-lg">
//           <div className="d-flex justify-content-between align-items-center">
//             <div>
//               <h1 className="display-6 bold-txt project-heading">
//                 Discover our Projects
//               </h1>
//               <h4 className="p_stat project-subheading">
//                 Our projects that are a testament to our commitment to excellence.
//               </h4>
//             </div>
//             <a className="btn btn-info" href="/Projects">
//               View All Projects
//             </a>
//           </div>
//           <Container fluid>
//             <Row>
//               {projects.slice(0, 3).map((project, index) => (
//                 <div className="col-12 col-md-4" key={project.id}>
//                   <div className="p__box pointer">
//                     <div className="p__meta">
//                       <h1 className="p__text">{project.name}</h1>
//                       <p className="p p_text p_color">
//                         {project.description.slice(0, 10)}...
//                       </p>
//                       <Link to={`/projects/${project._id}`}>
//                         <button className="icon-link">
//                           <FontAwesomeIcon icon={faArrowRight} />
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Row>
//           </Container>
//         </div>
//       </section>

//       {/* testimonial */}
//       <section id="testimonial" className="bg-testimonial">
//         <div className="container-lg">
//           <div className="text-center">
//             <h2>Trusted by Millions of Customers.</h2>
//             <p className="lead">
//               Our success in creating business solutions is due in large part to
//               our talented and highly committed team.
//             </p>
//           </div>
//           <div className="container">
//             <div className="row">
//               <Slider {...settings}>
//                 {testimonials.map((testimonial, index) => (
//                   <div className="col-12 col-md-4" key={index}>
//                     <div className="card bg-t_box">
//                       <div className="card-body t_box">
//                         <div className="card-number">{index + 1}</div>
//                         <div className="card-t">
//                           <h2 className="card-name">{testimonial.author}</h2>
//                           <p className="card-desc">{testimonial.text}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* socialFeeds */}
//       <section id="socialfeeds" className="bg-socialfeeds">
//         <div className="container-lg">
//           <div className="text-left">
//             <h2>Social Feeds</h2>
//             <p className="lead">Innovating Solutions, Empowering Lives</p>
//           </div>
//           <div className="container">
//             <div className="row">
//               {socialfeeds.map((socialfeed, index) => (
//                 <div className="col-12 col-md-4" key={index}>
//                   <div className="card bg-secondary-subtle">
//                     <div className="card-body t_box">
//                       <img
//                         src={socialfeed.url}
//                         className="card-img-top"
//                         alt="loading..."
//                       />
//                       <div className="card-t">
//                         <h2 className="card-n">{socialfeed.author}</h2>
//                         <p className="card-d">{socialfeed.content}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;
