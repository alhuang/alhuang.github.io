import React from "react";
import "./ProjectHeader.css";

function ProjectHeader(props) {
  return (
    <div className="project-header">
      <h1 className="project-title">{props.projectTitle}</h1>
      <p className="project-summary">{props.projectSummary}</p>
      <div className="project-info">
        <div className="project-info-column">
          <h3>Role</h3>
          UI/UX Designer
        </div>
        <div className="project-info-column">
          <h3>Timeline</h3>
          80 hours
        </div>
        <div className="project-info-column">
          <h3>Skills</h3>
          Figma
        </div>
      </div>
      <div className="project-goals">
        <h3>My high-level goals were...</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur elit. Lorem ipsum dolor sit
          amet, consectetur elit. Lorem ipsum dolor sit amet, consectetur elit.
        </p>
      </div>
    </div>
  );
}

export default ProjectHeader;
