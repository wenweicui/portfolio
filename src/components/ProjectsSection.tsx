import React from "react";
import SectionHeader from "./SectionHeader";
import ProjectsMenu from "./ProjectsMenu";
import item1 from "../assets/images/item1.png";
import item2 from "../assets/images/item2.png";
import item3 from "../assets/images/item3.png";
import item4 from "../assets/images/item4.png";
import item5 from "../assets/images/item5.png";
import item6 from "../assets/images/item6.png";
import item7 from "../assets/images/item7.png";
import item8 from "../assets/images/item8.png";
import item9 from "../assets/images/item9.png";
import item10 from "../assets/images/item10.png";

const projectsList = [
  {
    title: "Tidal Migration Platform",
    company: "Tidal Migration",
    from: "June 2021",
    to: "Present",
    description: [
      "Collaborate with product team to design, refactor, release and maintain the existing Tidal Migration Platform as a cloud migration assessment tool",
      "ReactJS SPA Front-End with custom themed components from the Tidal-UI Design System, secured with Auth0's SPA framework",
      "Collaborate with cross-functional team members on user support, features, design, and implementation",
      "Architect, implement, and test features across all stacks",
    ],
    tags: [
      "Typescript",
      "ReactJs",
      "Less",
      "CSS",
      "Ruby on Rails",
      "PostgreSQL",
      "Amazon AWS",
      "CI/CD",
    ],
    link: "https://tidalmigrations.com/",
    bgImg: item1,
  },
  {
    title: "Tidal-UI Design System",
    company: "Tidal Migration",
    from: "June 2021",
    to: "Present",
    description: [
      "Led the product team to build and maintain a collection of reusable ReactJs components in the design system based on the requirements",
      "Led the product team to build and maintain the storybook for a collection of component stories with usage demos and API documents",
      "Designed and maintained a reusable Figma library for a collection of UI components to help speed up the mock-up iterations",
      "Collaborate with product team members to properly interview existing app users and address all features and pain points",
      "Dramatically increase the Front-End development efficiency by more than 80% and make the Front-End development new team member friendly",
    ],
    tags: [
      "Typescript",
      "ReactJs",
      "Less",
      "CSS",
      "Figma",
      "Storybook",
      "Chromatic",
      "CI/CD",
    ],
    bgImg: item2,
  },
  {
    title: "Cloud Cost Calculator",
    company: "Tidal Migration",
    from: "Jan 2021",
    to: "May 2021",
    description: [
      "Collaborate with product team to design, develop, release and maintain the free cloud migration cost calculator web application",
      "Responsible for Designing, developing, and maintaining a Typescript React Spreadsheet Importer library and released on NPM",
    ],
    link: "https://cloudcalculator.com/",
    tags: [
      "Typescript",
      "ReactJs",
      "Less",
      "CSS",
      "Ruby on Rails",
      "PostgreSQL",
      "Amazon AWS",
      "CI/CD",
    ],
    bgImg: item3,
  },
  {
    title: "MTO Application Refactors",
    company: "Ministry of Transport Ontario",
    from: "May 2020",
    to: "June 2021",
    description: [
      "Full stack development and refactor of existing applications as a part of client's migration executions to Microsoft Azure Cloud",
      "Spring Boot back-end serving a GraphQL API, implemented RBAC with Auth0 and Spring Security for both internal and external users",
      "ReactJS SPA front-end with custom themed components from the MTO Design System, secured with Auth0's SPA framework",
    ],
    tags: [
      "JavaScript",
      "ReactJs",
      "Less",
      "CSS",
      "Java",
      "Spring Boot",
      "GraphQL",
      "MS Azure",
      "CI/CD",
    ],
    bgImg: item4,
  },
  {
    title: "MTO Design System",
    company: "Ministry of Transport Ontario",
    from: "May 2020",
    to: "June 2021",
    description: [
      "Created and maintained a collection of reusable ReactJs components in the design system based on the requirements",
      "Created and maintained a storybook with a collection of component stories with usage demos and API documents",
      "Collaborate with designers on the Ministry of Transport Ontario to properly interview existing users and address all pain points",
      "Collaborate with developers on the Ontario Design System team to address all UI alignment and accessibility requirements",
      "Dramatically increase the Front-End development efficiency by more than 70% after the new Design System released",
    ],
    tags: [
      "JavaScript",
      "ReactJs",
      "Less",
      "CSS",
      "Figma",
      "Storybook",
      "MS Azure",
      "CI/CD",
    ],
    link: "https://designsystem.ontario.ca/",
    bgImg: item5,
  },
  {
    title: "LuluCheck Mobile App",
    company: "LuluSmart",
    from: "May 2017",
    to: "June 2018",
    description: [
      "Collaborate with product team and bulid a cross-platform client-side application for all property owners to check and document the conditions of their properties while away",
      "Responsible for the front-end development and technical feasibility of UI/UX designs using React JS",
      "Improved the loading speed of data retrieving and calculating web pages successfully from 8 seconds to average 1 second",
      "Engineered dynamic components and created reusable code to facilitate future use.",
    ],
    link: "https://lulucheck.com/",
    tags: [
      "JavaScript",
      "React-Naive",
      "NodeJs",
      "Sass",
      "CSS",
      "PostgreSQL",
      "GraphQL",
      "MangoDB",
    ],
    bgImg: item7,
  },
  {
    title: "LuluSmart Web / Mobile App",
    company: "LuluSmart",
    from: "May 2016",
    to: "June 2017",
    description: [
      "Collaborate with product team and bulid a web application platform to promote local self-employed service provider’s business",
      "Responsible for the front-end development and technical feasibility of UI/UX designs using React JS",
      "Improved the loading speed of data retrieving and calculating web pages successfully from 8 seconds to average 1 second",
    ],
    link: "https://www.lulusmart.com/",
    tags: [
      "JavaScript",
      "ReactJs",
      "React-Naive",
      "NodeJs",
      "Sass",
      "CSS",
      "PostgreSQL",
      "GraphQL",
      "MangoDB",
    ],
    bgImg: item6,
  },
  {
    title: "COVID Global Trend Dashboard",
    company: "Independent",
    description: [
      "Developed a global trend dashboard for COVID-19 pandemic with heated map and intractive data graph using React JS based on covid19.mathdro.id API",
    ],
    link: "https://wenweicui.github.io/react-covid-19/",
    tags: ["JavaScript", "ReactJs", "Less", "CSS"],
    bgImg: item8,
  },
  {
    title: "React Portfolio V1",
    company: "Independent",
    description: [
      "A simple single page application Portfolio website with React JS",
      "Use the react portfolio to showcase works, testimonials and other information to others",
    ],
    link: "https://wenweicui.github.io/React-Portfolio/",
    tags: ["JavaScript", "ReactJs", "Less", "CSS"],
    bgImg: item9,
  },
  {
    title: "Tidal Migration Marketing Video",
    company: "Tidal Migration",
    description: [
      "Played the role of the lead video editor to create a 2 minutes animation marketing video for the new product release",
      "Published and maintained video on enterprise Youtube channel, the video currently has more than 100,000 views",
      "Used a variety of video and audio editing software to trim videos to match the top expectation",
      "Created a library of sound and visual effects to use for various projects",
    ],
    link: "https://youtu.be/mteh8b19D-I",
    tags: ["Adobe After Effect", "Adobe Illustrator", "Adobe Premiere Pro"],
    bgImg: item10,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects-section">
      <SectionHeader>Projects</SectionHeader>
      <ProjectsMenu projects={projectsList} />
    </section>
  );
};

export default ProjectsSection;
