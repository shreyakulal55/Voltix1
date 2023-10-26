import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css"; // Import the CSS for this component
import img from "../images/back.png";
const Home = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
      // Fetch testimonials data from your API when the component mounts
      axios.get('http://localhost:5000/testimonials')
        .then((response) => {
          setTestimonials(response.data);
        })
        .catch((error) => {
          console.error("Error fetching testimonials: " + error);
        });
    }, []);
  
  return (
    <div className="home-container">
      <div className="background-image">
  <img
    src={img}
    alt="Background" 
    className="left-aligned-image" // Add a class for styling
  />
</div>

      {/* <div className="text-overlay">
        <p>Where Ideas Come to Life </p>
        <h2>Welcome to Voltix</h2>
      </div> */}

      <div className="additional-content">
        <br></br>
        <h3>What we do and why we do it!</h3>
        <p>
          Our success in creating business solutions is due in large part to{" "}
          <br></br>our talented and highly committed team.
        </p>
      </div>

      <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card bg-secondary-subtle">
          <div class="card-body">
            <div class="card-number">1</div>
            <div class="card-content">
              <h2 class="card-title">Mobile App</h2>
              <p class="card-text">
                Mobile apps are the future of business. If you're not on mobile, you're missing out.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card bg-secondary-subtle">
          <div class="card-body">
            <div class="card-number">2</div>
            <div class="card-content">
              <h2 class="card-title">Web Development</h2>
              <p class="card-text">
                A well-designed website can help you establish credibility and trust with potential customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card bg-secondary-subtle">
          <div class="card-body">
            <div class="card-number">3</div>
            <div class="card-content">
              <h2 class="card-title">Software Development</h2>
              <p class="card-text">
                Software development innovates products, markets, and enhances customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card bg-secondary-subtle">
          <div class="card-body">
            <div class="card-number">4</div>
            <div class="card-content">
              <h2 class="card-title">Digital Marketing</h2>
              <p class="card-text">
                Digital marketing is the key to reaching your target audience and growing your business online.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card bg-secondary-subtle">
          <div class="card-body">
            <div class="card-number">5</div>
            <div class="card-content">
              <h2 class="card-title">UI/UX Design</h2>
              <p class="card-text">
                A professional UI/UX designer creates user-friendly interfaces, avoiding design mistakes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card bg-secondary-subtle">
          <div class="card-body">
            <div class="card-number">6</div>
            <div class="card-content">
              <h2 class="card-title">Video Production</h2>
              <p class="card-text">
                Crafting compelling videos that tell a powerful story, leaving a lasting impact on viewers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
  </br>
  <h1 class="project-heading">Discover our Projects</h1>
  <h3 class="project-subheading">Our projects that are a testament to our commitment to excellence.</h3>
  
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card bg-secondary-subtle">
          <div class="card-body">
            <div class="card-number">1</div>
            <div class="card-content">
              <h2 class="card-title">Mobile App</h2>
              <p class="card-text">
                Mobile apps are the future of business. If you're not on mobile, you're missing out.
              </p>
            </div>
          </div>
      </div>
      </div>
      </div>
      </div>

    <br></br>
  <h1 class="center-text">Trusted by Millions of Customers.</h1>
  <h2 class="center-side">Our ability to create effective business solutions is greatly attributed to our exceptionally talented and dedicated team.</h2>
    <br></br>
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
  );
};

export default Home;
