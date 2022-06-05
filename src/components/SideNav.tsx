import React from "react";
import pdf from "../assets/pdf/resume.pdf";

const SideNav = () => {
  return (
    <header className="sidenav-container">
      <div className="sidenav-link-group">
        <a href="#projects-section">Projects</a>
        <a href="#about-section">About</a>
        <a href="#contact-section">Contact</a>
        <a href={pdf} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
      <div className="sidenav-logo">
        <a href="#intro-section">@WILLIAMCUI</a>
      </div>
    </header>
  );
};

export default SideNav;
