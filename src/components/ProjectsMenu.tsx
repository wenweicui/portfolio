import React, { useState } from "react";

export type ProjectProps = {
  title: string;
  company: string;
  from?: string;
  to?: string;
  description: string[];
  link?: string;
  tags: string[];
  bgImg: string;
};

export type ProjectsMenuProps = {
  className?: string;
  projects: ProjectProps[];
};

const ProjectsMenu: React.FC<ProjectsMenuProps> = ({
  className = "",
  projects,
}: ProjectsMenuProps) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const currentProject = projects[projectIndex];

  return (
    <div className={`projects-menu ${className}`}>
      <ul className="project-title-container">
        {projects.map((project: ProjectProps, i: number) => (
          <li key={i}>
            <div
              className={`project-title ${i === projectIndex ? "active" : ""}`}
              onClick={() => setProjectIndex(i)}
            >
              <span>{project.title}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="project-container">
        <div className="project-description">
          <div>
            <div className="project-description-title">
              {currentProject.title}
              <span>
                {currentProject.from} - {currentProject.to}
              </span>
            </div>
            <ul className="description-content-container">
              {currentProject.description.map((content: string, i: number) => (
                <li>
                  <span>{content}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`project-description-img ${
              currentProject.link ? "hoverable-img-container" : ""
            }`}
          >
            <img src={currentProject.bgImg} alt="project-img" />
            {currentProject.link && (
              <a
                className="project-img-link"
                href={currentProject.link}
                target="_blank"
                rel="noreferrer"
              >
                <div>Click to view website</div>
              </a>
            )}
          </div>
        </div>
        <div className="project-tags">
          {currentProject.tags?.map((tag) => (
            <div className="tag">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsMenu;
