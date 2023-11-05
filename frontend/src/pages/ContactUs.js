import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css";
import URL from "../.env/secret.js";

function validateEmail(email) {
  const emailPattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  return emailPattern.test(email);
}

function validateMobileNumber(phoneNumber) {
  const mobilePattern = /^\d{10}$/;
  return mobilePattern.test(phoneNumber);
}

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email) ? "" : "Invalid email address");
  };

  const handlePhoneNumberBlur = () => {
    setPhoneNumberError(
      validateMobileNumber(phoneNumber) ? "" : "Invalid phone number"
    );
  };

  const handleEnterKey = (e, nextField) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextField.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError || phoneNumberError) {
      setSuccessMessage("Please fix the validation errors before submitting.");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return;
    }

    const data = {
      name,
      email,
      phoneNumber,
      message,
    };

    const apiURL = `${URL}/contacts`; 

    axios
      .post(apiURL, data)
      .then((response) => {
        setSuccessMessage("Submitted successfully");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);

        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
        setSuccessMessage("Error submitting the form");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);

 
        if (error.response) {
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
        }
      });
  };

  return (
    <div>
      <div
        id="success-message"
        className={`alert ${successMessage ? "alert-success" : "d-none"}`}
      >
        {successMessage}
      </div>
      <div className="bg-contact100">
        <div className="container-contact100">
          <div className="wrap-contact100">
            <div className="contact100-pic js-tilt" data-tilt>
              <img src="https://i.imgur.com/VRFiMzM.png" alt="IMG" />
            </div>
            <form className="contact100-form validate-form" onSubmit={handleSubmit}>
              <span className="contact100-form-title">Get in touch</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Name is required"
              >
                <input
                  className="input100"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  onKeyPress={(e) =>
                    handleEnterKey(e, document.getElementById("phoneNumber"))
                  }
                />
                {emailError && <div className="text-danger">{emailError}</div>}
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="phoneNumber"
                  placeholder="phone no"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  onBlur={handlePhoneNumberBlur}
                  onKeyPress={(e) =>
                    handleEnterKey(e, document.getElementById("message"))
                  }
                />
                {phoneNumberError && (
                  <div className="text-danger">{phoneNumberError}</div>
                )}
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Message is required"
              >
                <textarea
                  className="input100"
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <span className="focus-input100"></span>
              </div>
              <div className="container-contact100-form-btn">
                <button type="submit" className="contact100-form-btn">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
