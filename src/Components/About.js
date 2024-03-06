import React from "react";
import AboutBackground from "../Assets/blue.jpg";
import AboutBackgroundImage from "../Assets/about-background-image.jpg";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">What we offer</p>
        
        <h1 className="primary-heading">
        Explore AI Opportunities for Your Enterprise
        </h1>
        <p className="primary-text">
        Unlock the potential of generative AI by identifying tailored opportunities for integration within
        your organization, ensuring a strategic and efficient approach to AI implementation.
        </p>
        <h1 className="primary-heading">
        Design AI Trust Layer
        </h1>
        <p className="primary-text">
        Prioritize data security and build trust in generative AI applications with a dedicated trust
        layer, emphasizing privacy-focused solutions that safeguard both organizational and
        customer data.
        </p>
        <h1 className="primary-heading">
        Scalability-Focused Solutions
        </h1>
        <p className="primary-text">
        Streamline and optimize business processes with comprehensive workflow automation,
        ensuring seamless integration of AI technologies from inception to execution for increased
        efficiency and productivity.

        </p>
        <h1 className="primary-heading">
        End to end Workflow automation
        </h1>
        <p className="primary-text">
        Implement cutting-edge, scalable generative AI solutions that not only meet current
        organizational needs but also adapt and grow with the evolving demands of your enterprise,
        providing a future-proof approach to AI integration.
        </p>
      </div>
    </div>
  );
};

export default About;
