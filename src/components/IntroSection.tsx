import React from "react";
import avatar2 from "../assets/images/avatar2.jpg";
var ReactRotatingText = require("react-rotating-text");

const IntroSection = () => {
  const messages = [
    "Engineering Manager",
    "Healthcare Software Builder",
    "Generative AI Practitioner",
    "Design System Builder",
    "Full-Stack Developer",
  ];

  return (
    <section id="intro-section" className="scroll-section intro-section">
      <h2 className="intro-main-text">Hi, I AM</h2>
      <div className="intro-name">
        <img src={avatar2} alt="avatar" />
        <span>WILLIAM CUI</span>
      </div>
      <h2 className="intro-hint-text">A</h2>
      <ReactRotatingText
        items={messages}
        pause={2000}
        className="intro-main-text intro-text-loop"
      />
    </section>
  );
};

export default IntroSection;
