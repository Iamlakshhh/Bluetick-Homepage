import React from "react";
import BannerBackground from "../Assets/blue1.jpg";
import BannerImage from "../Assets/Ai.jpg";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img  src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a significant impact in the Indian and US startup ecosystems.
          </h1>
          <p className="primary-text">
            Transforming Enterprises<br/>
            with cutting-edge, scalable, privacy-focused Generative AI Solutions
          </p>
          <button className="secondary-button">
            <a href="https://www.bluetickconsultants.com/generative-ai.html">To know more about us</a>
          </button>
        </div>
        <div className="home-image-section">
          <img className="Ai-image" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
