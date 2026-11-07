import React from "react";
import SectionHeader from "./SectionHeader";

const aboutContent1 =
  "is an engineering manager in Toronto with 8+ years of experience in production software and 3+ years leading healthcare teams. He currently manages eight engineers across clinical reporting and clinical data platform teams at Prenuvo, while staying hands-on in system design, code review and prototyping.";
const aboutContent2 =
  "He owns a 24/7 clinical reporting platform used by around 100 radiologists in four countries, builds generative AI features with clinical validation and PII guardrails, and leads the migration of a core clinical data store to HL7 FHIR on AWS HealthLake. He also champions AI-assisted engineering, including Cursor, the Model Context Protocol and spec-driven development.";
const aboutContent3 =
  "William holds an MSc in Computer Science with Artificial Intelligence from the University of York. Earlier in his career he built several React design systems and front-end applications, which gives him a strong eye for user experience, accessibility and performance.";

const skills = {
  Leadership: [
    "Team Leadership",
    "Hiring & Mentoring",
    "Tech Strategy",
    "Roadmapping",
    "Cross-team Delivery",
  ],
  "AI & Data": [
    "Generative AI",
    "LLM Evaluation",
    "PII / PHI Guardrails",
    "HL7 FHIR",
    "Airflow",
    "Databricks",
  ],
  Code: [
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
    "GraphQL",
    "React",
    "React Native",
    "Node.js",
    "Rails",
  ],
  "Cloud & Tools": [
    "AWS",
    "GCP",
    "MS Azure",
    "CI/CD",
    "Cursor",
    "Claude Code",
    "MCP",
  ],
  Design: ["Figma", "Storybook", "Design Systems", "Accessibility"],
};

const ContentSection = () => (
  <div className="about-content-container">
    <p>
      <span>William </span>
      {aboutContent1}
    </p>
    <p>{aboutContent2}</p>
    <p>{aboutContent3}</p>
  </div>
);

const SkillsSection = () => (
  <div className="about-skills-container">
    <h3>Key Skills</h3>
    <div className="about-skills-list">
      {Object.entries(skills).map(([key, value]) => (
        <div className="about-skill">
          <h4>{key}</h4>
          <ul>
            {value.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about-section">
      <SectionHeader>About</SectionHeader>
      <div className="about-container">
        <ContentSection />
        <SkillsSection />
      </div>
    </section>
  );
};

export default AboutSection;
