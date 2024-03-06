import React from "react";
import SQL from "../Assets/SQL1.png";
import elevatingAI from "../Assets/elevatingAI.png";
import PEFT from "../Assets/PEFT.png";
import privacy from "../Assets/privacy.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: SQL,
      title: "Turning Natural Language into Database Dialogues",
      text: "Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to extract insights from these data repositories, the quest for more intuitive and accessible querying methods gains momentum. The emerging solution? Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language.",
      
    },
    {
      image: elevatingAI,
      title: "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
      text: "Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language. This method, vital for fine-tuning language models, addresses the complexities and nuances of communication, ensuring AI interactions are natural and intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding models to avoid replicating inappropriate language or tones.",
    },
    {
      image: PEFT,
      title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
      text: "Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning requires adjusting countless parameters, which is time-consuming, and the GPU demands are nothing short of immense.",
    },
    {
      image: privacy,
      title: "PrivAIcy Matters: Balancing Privacy, Price, and Performance",
      text: "Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data, this technology has unassumingly become the new frontier for a plethora of industries, including tech, banking, and media. And, no surprises here, the technological world has openly embraced it in myriad innovative ways.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Explore and enjoy the blogs </p>
        <h1 className="primary-heading">written by our passionate techies</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
