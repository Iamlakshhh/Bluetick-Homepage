import React from "react";
import Logo from "../Assets/logo.jpg";
import Footerimg from "../Assets/footer.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img className="Footer-img" src={Logo} alt="" />
          <h1 className="footer-heading-1">Bluetick Consultants</h1>
        </div>
          <h1 className="footer-heading-2">Bluetick Consultants LLP</h1>
          <a href="contact@blueticconsultants.com">contact@blueticconsultants.com</a>
          <div className="Footer-img-2">
          <img className="Footer-img-1" src={Footerimg} alt="" />
          </div>
        
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>RESOURCES</span>
          <span>▶️Blogs</span>
        </div>
        <div className="footer-section-columns">
          <span>PRODUCT</span>
          <span>▶️Talk To Code</span>
          <span>▶️InterviewGPT</span>
          <span>▶️PrivacyDoc</span>
          <span>▶️Privacy Policy</span>
        </div>
      </div>
          <h1 className="icons-text">Connect with us : </h1>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
    </div>
  );
};

export default Footer;
