import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import img from "../images/back.png";

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials data from your API when the component mounts
    axios
      .get("http://localhost:5000/testimonials")
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials: " + error);
      });
  }, []);

  return (
    <>
      <section id="intro" className="intro-background">
        <div className="sticky-top bg-white hidden-spacer"> </div>
        <div className="container-lg">
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-md-5 order-md-2 text-center text-md-start">
              <h1>
                <div className="circular-background">
                  <div className="display-6 bold-text">
                    Where Ideas Come to<br></br> Life
                  </div>
                  <div className="display-4 bold-text">
                    Welcome to<br></br> Voltix
                  </div>
                </div>
              </h1>
            </div>
            <div
              className="col-md-5 order-md-1 text-center d-none d-md-block"
              style={{ marginTop: "164px" }}
            >
              <img src={img} className="img-fluid" alt="ebook" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-light">
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
              <div className="col-md-4 mb-4">
                <div className="card bg-secondary-subtle">
                  <div className="card-body">
                    <div className="card-number">1</div>
                    <div className="card-content">
                      <h2 className="card-title">Mobile App</h2>
                      <p className="card-text">
                        Mobile apps are the future of business. If you're not on
                        mobile, you're missing out.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card bg-secondary-subtle">
                  <div className="card-body">
                    <div className="card-number">2</div>
                    <div className="card-content">
                      <h2 className="card-title">Web Development</h2>
                      <p className="card-text">
                        A well-designed website can help you establish
                        credibility and trust with potential customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-secondary-subtle">
                  <div className="card-body">
                    <div className="card-number">3</div>
                    <div className="card-content">
                      <h2 className="card-title">Software Development</h2>
                      <p className="card-text">
                        Software development innovates products, markets, and
                        enhances customer service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card bg-secondary-subtle">
                  <div className="card-body">
                    <div className="card-number">4</div>
                    <div className="card-content">
                      <h2 className="card-title">Digital Marketing</h2>
                      <p className="card-text">
                        Digital marketing is the key to reach your target
                        audience and growing your business online.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-secondary-subtle">
                  <div className="card-body">
                    {" "}
                    <div className="card-number">5</div>
                    <div className="card-content">
                      <h2 className="card-title">UI/UX Design</h2>
                      <p className="card-text">
                        A professional UI/UX designer creates user-friendly
                        interfaces, avoiding design mistakes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-secondary-subtle">
                  <div className="card-body">
                    <div className="card-number">6</div>
                    <div className="card-content">
                      <h2 className="card-title">Video Production</h2>
                      <p className="card-text">
                        Crafting compelling videos that tell a powerful story,
                        leaving a lasting impact on viewers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </section>

      <section id="projects" className="bg-light">
        <div className="container-lg">
          <h1 class="project-heading">Discover our Projects</h1>
          <h3 class="project-subheading">
            Our projects that are a testament to our commitment to excellence.
          </h3>

          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="card bg-secondary-subtle">
                  <div class="card-body">
                    <div class="card-number">1</div>
                    <div class="card-content">
                      <h2 class="card-title">Mobile App</h2>
                      <p class="card-text">
                        Mobile apps are the future of business. If you're not on
                        mobile, you're missing out.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" className="bg-light">
        <div className="container-lg">
          <h1 class="center-text">Trusted by Millions of Customers.</h1>
          <h2 class="center-side">
            Our ability to create effective business solutions is greatly
            attributed to our exceptionally talented and dedicated team.
          </h2>
          <div class="container">
            <div class="row">
              {testimonials.map((testimonial, index) => (
                <div class="col-md-4" key={index}>
                  <div class="card bg-secondary-subtle">
                    <div class="card-body">
                      <div class="card-number">{index + 1}</div>
                      <div class="card-content">
                        <h2 class="card-title">{testimonial.author}</h2>
                        <p class="card-text">{testimonial.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;