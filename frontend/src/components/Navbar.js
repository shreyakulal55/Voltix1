import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://voltix1.s3.amazonaws.com/voltix_logo.png"
            alt="loading"
            width="170"
            height="42.2"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AboutUs">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <a className="btn btn-info" href="/ContactUs">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

