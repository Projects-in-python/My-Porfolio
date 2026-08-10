import React from "react";
import "./OpenSourceProjects.css";
import OpenSourceProjectCard from "../openSourceProjectCard/OpenSourceProjectCard";
import { Fade } from "react-reveal";

export default function OpenSourceProjects({ projectsData, theme }) {
  if (!projectsData || !projectsData.data || projectsData.data.length === 0) {
    return null;
  }

  return (
    <div className="os-projects-main-div">
      <div className="os-projects-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="os-projects-header" style={{ color: theme.text }}>
            Open Source Projects
          </h1>
        </Fade>
      </div>
      <div className="os-projects-grid">
        {projectsData.data.map((project) => (
          <OpenSourceProjectCard
            key={project.id}
            project={project}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}
