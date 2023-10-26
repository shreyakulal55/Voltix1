import React from "react";
import "./Home.css";
import img from "../images/back.png";

const Home = () => {
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
                  <div className="display-4 bold-text">Welcome to<br></br> Voltix</div>
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
    </>
  );
};

export default Home;
