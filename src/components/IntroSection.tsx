import React from "react";
import avatar from '../assets/images/avatar.png';
var ReactRotatingText = require('react-rotating-text');

const IntroSection = () => {
  const messages = [
    "Software Developer",
    "UI/UX Designer",
    "Migration Hacker",
    "Graphic Designer"
  ];

  return (
    <section
      id="intro-section"
      className="scroll-section intro-section"
    >
      <h2 className="intro-main-text">Hi, I AM</h2>
      <div className="intro-name">
        <img src={avatar} alt="avatar" />
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