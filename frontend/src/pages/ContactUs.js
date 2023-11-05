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

    const apiURL = `${URL}/contacts`; // Replace with your actual endpoint

    axios
      .post(apiURL, data)
      .then((response) => {
        setSuccessMessage("Submitted successfully");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);

        // Clear the form fields on successful submission
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

        // Additional error handling:
        if (error.response) {
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
          // You can add more specific error handling here if needed.
        }
      });
  };

  return (
    <div>
<<<<<<< HEAD
      <div id="success-message" class="mobt" className={`alert ${successMessage ? 'alert-success' : 'd-none'}`}>
          {successMessage}
        </div>
    <div class="bg-contact100">
    <div class="container-contact100">
        <div class="wrap-contact100">
            <div class="contact100-pic js-tilt" data-tilt>
                <img src="https://i.imgur.com/VRFiMzM.png" alt="IMG" />
            </div>
            <form class="contact100-form validate-form" onSubmit={handleSubmit}>
                <span class="contact100-form-title">
                    Get in touch
                </span>
                <div class="wrap-input100 validate-input" data-validate="Name is required">
                    <input class="input100" id="name" type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input class="input100" id="email" type="text" name="email" placeholder="Email" value={email} 
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    onKeyPress={(e) => handleEnterKey(e, document.getElementById('phoneNumber'))}/>
                    {emailError && <div className="text-danger">{emailError}</div>}
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input class="input100" type="text" name="phoneNumber" placeholder="phone no"  value={phoneNumber} onChange={handlePhoneNumberChange}
              onBlur={handlePhoneNumberBlur} onKeyPress={(e) => handleEnterKey(e, document.getElementById('message'))}/>
              {phoneNumberError && <div className="text-danger">{phoneNumberError}</div>}
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="wrap-input100 validate-input" data-validate="Message is required">
                    <textarea class="input100" id='message' name="message" placeholder="Message" value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                    <span class="focus-input100"></span>
                </div>
                <div class="container-contact100-form-btn">
                    <button type='submit' class="contact100-form-btn">
                        Send
                    </button>
                </div>
            </form>
        </div>
=======
      <div
        id="success-message"
        className={`alert ${successMessage ? "alert-success" : "d-none"}`}
      >
        {successMessage}
      </div>
      <div class="bg-contact100">
        <div class="container-contact100">
          <div class="wrap-contact100">
            <div class="contact100-pic js-tilt" data-tilt>
              <img src="https://i.imgur.com/VRFiMzM.png" alt="IMG" />
            </div>
            <form class="contact100-form validate-form" onSubmit={handleSubmit}>
              <span class="contact100-form-title">Get in touch</span>
              <div
                class="wrap-input100 validate-input"
                data-validate="Name is required"
              >
                <input
                  class="input100"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>
              <div
                class="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  class="input100"
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
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div
                class="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  class="input100"
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
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div
                class="wrap-input100 validate-input"
                data-validate="Message is required"
              >
                <textarea
                  class="input100"
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <span class="focus-input100"></span>
              </div>
              <div class="container-contact100-form-btn">
                <button type="submit" class="contact100-form-btn">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
>>>>>>> e510e48d6bca26616d29b83508200e3b015f4939
    </div>
</div>
</div>
  );
};

export default ContactUs;
