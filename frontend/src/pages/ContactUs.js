import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phoneNumber,
      message,
    };

    axios
      .post("http://localhost:5000/contacts", data)
      .then((response) => {
        setSuccessMessage("Submitted successfully");

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);

        // Clear the form inputs after submission
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      })
      .catch((error) => {
        setSuccessMessage("Error submitting the form");

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      });
  };

  return (
    <div className="whole">
      <h1 className="contact-text">Contact Us</h1>

      <div className="container contact-form">
        <div
          id="success-message"
          className={`alert ${successMessage ? "alert-success" : "d-none"}`}
        >
          {successMessage}
        </div>
        <form className="form-width" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-light">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
