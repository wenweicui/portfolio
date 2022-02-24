import React, { useState } from "react";

export type ProjectProps = {
  title: string;
  description: string[];
  bgImgUrl: string;
}

export type ProjectsMenuProps = {
  className?: string;
  projects: ProjectProps[];
}

const ProjectsMenu: React.FC<ProjectsMenuProps> = ({
  className = "",
  projects
}: ProjectsMenuProps) => {

  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <div className={`projects-menu ${className}`}>
      <ul className="project-title-container">
        {projects.map((project: ProjectProps, i: number) => (
          <li key={i}>
            <div
              className={`project-title ${i === projectIndex ? "active" : ""}`}
              onClick={() => setProjectIndex(i)}>
              {project.title}
            </div>
          </li>
        ))}
      </ul>
      <div className="project-description">
        <div>
          <ul className="description-content-container">
            {projects[projectIndex].description.map((content: string, i: number) => (
              <li>
                <span>{content}</span>
              </li>
            ))}
          </ul>
          <button>Click to view</button>
        </div>
        <img src={projects[projectIndex].bgImgUrl} />
      </div>
    </div>
  );
};

export default ProjectsMenu;