import React from "react";
import SectionHeader from './SectionHeader';
import devImg from '../assets/images/dev.png';
import designImg from '../assets/images/design.png';

const aboutContent1 = "is a goal and detail-oriented, full-stack developer of mobile-first, responsive web applications as well as mobile-native applications. William is comfortable engaging with clients to solicit requirements and gather feedback on UI design, as well as developing readable and maintainable code in a team, or individual setting.";
const aboutContent2 = "Possessing a long track record of developing responsive single-page apps, hybrid mobile apps, and RESTful APIs, William has demonstrated proficiency and expertise in modern application development practices (DevOps) and technologies.";
const aboutContent3 = "With his commitment to life-long learning and life-balance demonstrated by recent additional education in economics and cloud migration, William is armed with the skills and experience needed to create dynamic, professional, user-friendly experiences in an agile team environment.";

const skills = {
  "Languages": [
    "Ruby on Rails",
    "Clojure",
    "Python",
    "PHP",
    "Java",
    "HTML5",
    "JavaScript",
    "TypeScript",
    "CSS / Scss / Less"
  ],
  "Frameworks": [
    "React JS",
    "React Native",
    "Node.js",
    "ClojureScript",
    "Reframe",
    "Redux",
    "Jquery",
    "Boostrap"
  ],
  "Platforms": [
    "Linux",
    "MacOS",
    "Windows",
    "Android",
    "iOS",
    "AWS",
    "MS Azure"
  ],
  "DevOps": [
    "git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Jira",
    "Trello",
    "Slack"
  ],
  "Design": [
    "Figma",
    "Framer",
    "Sketch",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe After Effect",
  ]
}

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
      <SectionHeader>
        About
      </SectionHeader>
      <div className="about-container">
        <ContentSection />
        <SkillsSection />
      </div>
    </section>
  );
};

export default AboutSection;