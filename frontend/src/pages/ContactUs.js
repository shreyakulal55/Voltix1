import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // Change the state variable name
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phoneNumber, // Update the field name to match your database
      message,
    };

    axios
      .post('http://localhost:5000/contacts', data)
      .then((response) => {
        setSuccessMessage('Submitted successfully');

        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      })
      .catch((error) => {
        setSuccessMessage('Error submitting the form');

        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      });
  };

  return (
    <div className="container">
      <div className="sticky-top bg-white hidden-spacer"> </div>
      <div id="success-message" className={`alert ${successMessage ? 'alert-success' : 'd-none'}`}>
        {successMessage}
      </div>
      <h1 className="my-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
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
          <label htmlFor="email" className="form-label">Email:</label>
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
          <label htmlFor="phoneNumber" className="form-label">Phone Number:</label> {/* Update the label and ID */}
          <input
            type="tel"
            id="phoneNumber" // Update the ID
            name="phoneNumber" // Update the name
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)} // Update the state update function
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
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

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;

