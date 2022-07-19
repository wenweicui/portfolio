import React from "react";
import resume from "../assets/pdf/resume.pdf";
// import designResume from "../assets/pdf/design-resume.pdf";
// import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

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
        <a href={resume} target="_blank" rel="noreferrer">
          Resume
        </a>
        {/* <Menu
          arrow
          align="center"
          menuButton={<div className="resume-button">Resumes</div>}
          direction="right"
          className="resume-menu"
        >
          <MenuItem>
            <a href={resume} target="_blank" rel="noreferrer">
              General Resume
            </a>
          </MenuItem>
          <MenuItem>
            <a href={designResume} target="_blank" rel="noreferrer">
              Design Resume
            </a>
          </MenuItem>
        </Menu> */}
      </div>
      <div className="sidenav-logo">
        <a href="#intro-section">@WILLIAMCUI</a>
      </div>
    </header>
  );
};

export default SideNav;
