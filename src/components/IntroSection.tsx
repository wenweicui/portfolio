import React from "react";
import avatar2 from "../assets/images/avatar2.jpg";
var ReactRotatingText = require("react-rotating-text");

const IntroSection = () => {
  const messages = [
    "Software Developer",
    "UI/UX Designer",
    "Cloud Developer",
    "Graphic Designer",
    "Ordinary User",
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
