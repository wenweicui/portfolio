import React from "react";
import pdf from "../assets/pdf/resume.pdf";

const SideNav = () => {
  const smoothScrollTo = (ev: MouseEvent, id: string) => {
    ev.preventDefault();
    const target = document.getElementById(id);
    target && target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sidenav-container">
      <div className="sidenav-link-group">
        <a
          href="/"
          onClick={(ev: any) => smoothScrollTo(ev, "projects-section")}
        >
          Projects
        </a>
        <a href="/" onClick={(ev: any) => smoothScrollTo(ev, "about-section")}>
          About
        </a>
        <a
          href="/"
          onClick={(ev: any) => smoothScrollTo(ev, "contact-section")}
        >
          Contact
        </a>
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
