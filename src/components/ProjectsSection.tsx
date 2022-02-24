import React from "react";
import SectionHeader from './SectionHeader';
import ProjectsMenu from "./ProjectsMenu";
import item0 from '../assets/images/item0.png';
import item1 from '../assets/images/item1.png';
import item2 from '../assets/images/item2.png';
import item3 from '../assets/images/item3.png';
import item4 from '../assets/images/item4.png';
import item5 from '../assets/images/item5.png';

const projectsList = [
  {
    title: "Tidal Migration Platform",
    description: [
      "Full stack development and refactor of existing application to migrate to Azure Cloud",
      "Spring Boot back-end serving a GraphQL API, implemented RBAC with Auth0 and Spring Security for both internal and external users",
      "ReactJS SPA front-end with custom themed components from the MTO Design System, secured with Auth0's SPA framework"
    ],
    bgImgUrl: item0
  },
  {
    title: "Tidal-UI Design System",
    description: [
      "Full stack development and refactor of existing application to migrate to Azure Cloud",
      "Spring Boot back-end serving a GraphQL API, implemented RBAC with Auth0 and Spring Security for both internal and external users",
      "ReactJS SPA front-end with custom themed components from the MTO Design System, secured with Auth0's SPA framework"
    ],
    bgImgUrl: item0
  },
  {
    title: "Cloud Cost Calculator",
    description: [
      "Full stack development and refactor of existing application to migrate to Azure Cloud",
      "Spring Boot back-end serving a GraphQL API, implemented RBAC with Auth0 and Spring Security for both internal and external users",
      "ReactJS SPA front-end with custom themed components from the MTO Design System, secured with Auth0's SPA framework"
    ],
    bgImgUrl: item0
  },
  {
    title: "Ministry of Transport Ontario",
    description: [
      "Full stack development and refactor of existing application to migrate to Azure Cloud",
      "Spring Boot back-end serving a GraphQL API, implemented RBAC with Auth0 and Spring Security for both internal and external users",
      "ReactJS SPA front-end with custom themed components from the MTO Design System, secured with Auth0's SPA framework"
    ],
    bgImgUrl: item0
  },
  {
    title: "MTO Design System",
    description: [
      "Full stack development and refactor of existing application to migrate to Azure Cloud",
      "Spring Boot back-end serving a GraphQL API, implemented RBAC with Auth0 and Spring Security for both internal and external users",
      "ReactJS SPA front-end with custom themed components from the MTO Design System, secured with Auth0's SPA framework"
    ],
    bgImgUrl: ""
  },
  {
    title: "LuluSmart Web / Mobile App",
    description: [
      "Full stack development and refactor of existing application to migrate to Azure Cloud",
      "Spring Boot back-end serving a GraphQL API, implemented RBAC with Auth0 and Spring Security for both internal and external users",
      "ReactJS SPA front-end with custom themed components from the MTO Design System, secured with Auth0's SPA framework"
    ],
    bgImgUrl: item1
  },
  {
    title: "LuluCheck Mobile App",
    description: [
      "Full stack development and refactor of existing application to migrate to Azure Cloud",
      "Spring Boot back-end serving a GraphQL API, implemented RBAC with Auth0 and Spring Security for both internal and external users",
      "ReactJS SPA front-end with custom themed components from the MTO Design System, secured with Auth0's SPA framework"
    ],
    bgImgUrl: item4
  },
  {
    title: "COVID Global Trend Dashboard",
    description: [
      "Full stack development and refactor of existing application to migrate to Azure Cloud",
      "Spring Boot back-end serving a GraphQL API, implemented RBAC with Auth0 and Spring Security for both internal and external users",
      "ReactJS SPA front-end with custom themed components from the MTO Design System, secured with Auth0's SPA framework"
    ],
    bgImgUrl: item0
  },
  {
    title: "React Portfolio V1",
    description: [
      "Full stack development and refactor of existing application to migrate to Azure Cloud",
      "Spring Boot back-end serving a GraphQL API, implemented RBAC with Auth0 and Spring Security for both internal and external users",
      "ReactJS SPA front-end with custom themed components from the MTO Design System, secured with Auth0's SPA framework"
    ],
    bgImgUrl: item0
  },
  {
    title: "Tidal Migration Marketing Video",
    description: [
      "Full stack development and refactor of existing application to migrate to Azure Cloud",
      "Spring Boot back-end serving a GraphQL API, implemented RBAC with Auth0 and Spring Security for both internal and external users",
      "ReactJS SPA front-end with custom themed components from the MTO Design System, secured with Auth0's SPA framework"
    ],
    bgImgUrl: item0
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects-section">
      <SectionHeader>
        Projects
      </SectionHeader>
      <ProjectsMenu 
        projects={projectsList}
      />
    </section>
  );
};

export default ProjectsSection;