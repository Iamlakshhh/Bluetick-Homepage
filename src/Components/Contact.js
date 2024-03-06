import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">LET'S CONNECT</h1>
      <h1 className="primary-text">Contact our support team or make an appointment with our experts.</h1>
      <div className="contact-form-container">
        
        <input type="text" placeholder="Enter your Full Name*" />
        <input type="email" placeholder="Enter your E-mail*" />
        <input type="number" placeholder="Enter your Contact Number*" />
        <input type="text" placeholder="Subject*" />
        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Message*"></textarea>
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
