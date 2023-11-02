import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css';
import URL from '../.env/secret.js';

function validateEmail(email) {
  const emailPattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  return emailPattern.test(email);
}

function validateMobileNumber(phoneNumber) {
  const mobilePattern = /^\d{10}$/;
  return mobilePattern.test(phoneNumber);
}

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email) ? '' : 'Invalid email address');
  };

  const handlePhoneNumberBlur = () => {
    setPhoneNumberError(validateMobileNumber(phoneNumber) ? '' : 'Invalid phone number');
  };

  const handleEnterKey = (e, nextField) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextField.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError || phoneNumberError) {
      setSuccessMessage('Please fix the validation errors before submitting.');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return;
    }

    const data = {
      name,
      email,
      phoneNumber,
      message,
    };

    const apiURL = `${URL}/contacts`; // Replace with your actual endpoint

    axios
      .post(apiURL, data)
      .then((response) => {
        setSuccessMessage('Submitted successfully');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);

        // Clear the form fields on successful submission
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
        setSuccessMessage('Error submitting the form');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);

        // Additional error handling:
        if (error.response) {
          console.log('Response data:', error.response.data);
          console.log('Response status:', error.response.status);
          // You can add more specific error handling here if needed.
        }
      });
  };

  return (
    <div className='wh'>
      <div id="success-message" className={`alert ${successMessage ? 'alert-success' : 'd-none'}`}>
          {successMessage}
        </div>
      <h1 className="contact-text">Contact Us</h1>

      <div className="container contact-form">
      
        <form className="form-width" onSubmit={handleSubmit}>
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
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              onKeyPress={(e) => handleEnterKey(e, document.getElementById('phoneNumber'))}
              className="form-control"
              required
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label> 
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              onBlur={handlePhoneNumberBlur}
              onKeyPress={(e) => handleEnterKey(e, document.getElementById('message'))}
              className="form-control"
              required
            />
            {phoneNumberError && <div className="text-danger">{phoneNumberError}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;