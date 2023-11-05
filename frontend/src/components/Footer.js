/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.css"; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid-container">
        <div className="grid-item">
          <a href="/Info">
            <img
              src="https://www.voltixsolution.com/assets/img/voltix_logo.png"
              height="42.2"
              width="170"
            />
          </a>

          <p className="text-[#8D8D8E] mt-4">
            We are not afraid to say no to projects that we cannot do well. We
            would rather focus on a few projects and do them right than take on
            too much and sacrifice quality.
          </p>
        </div>
        <div className="grid-item">
          <h3>Company</h3>
          <hr className="w-8 h-1 bg-webGreen mt-2"></hr>
          <ul>
            <li>
              <a href="/AboutUs">About Us</a>
            </li>
            <li>
              <a href="/ContactUs">Get in Touch</a>
            </li>
            <li>
              <a href="/Info">Privacy Policy</a>
            </li>
            <li>
              <a href="/ContactUs">Support</a>
            </li>
          </ul>
        </div>
        <div className="grid-item">
          <h3>Information</h3>
          <hr className="w-8 h-1 bg-webGreen mt-2"></hr>
          <ul>
            <li>
              <a href="/Info">
                Kinfra Calicut - Near Calicut University, Chelambra P.O
                Kakkancherry, Malappuram, Kerala. 673634
              </a>
            </li>
            <li>
              <a href="/Info">+91 80893 25152</a>
            </li>
            <li>
              <a href="/Info">voltixsolution@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="grid-item">
  <a className="FI" href="/ContactUs">
    <img
      src="https://voltix1.s3.amazonaws.com/favicon.ico"
      height="150"
      width="150"
    />
  </a>

  <p className="text-[#8D8D8E] mt-4">
  Get <a href="/ContactUs" style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}> connected</a> with us and explore how we can collaborate to achieve your goals.
  </p>
</div>


      </div>

      <div className="copyright">
        © 2023 Voltix Solution , All Rights Reserved. Design By Team Voltix
      </div>
    </footer>
  );
};

export default Footer;
