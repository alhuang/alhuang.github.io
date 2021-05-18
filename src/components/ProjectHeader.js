import React from "react";
import "./ProjectHeader.css";

function ProjectHeader(props) {
  return (
    <div className="project-header">
      <h1 className="project-title">
        {props.projectTitle}: {props.label}
      </h1>
      <p
        className="project-summary"
        dangerouslySetInnerHTML={{ __html: props.projectSummary }}
      />
      <div className="project-info">
        <div className="project-info-column">
          <h3>Role</h3>
          {props.role}
        </div>
        <div className="project-info-column">
          <h3>Timeline</h3>
          {props.timeline}
        </div>
        <div className="project-info-column">
          <h3>Skills</h3>
          {props.skills}
        </div>
      </div>
      <div className="project-goals">
        <h3>My high-level goals were to...</h3>
        <p>{props.projectGoals}</p>
      </div>
    </div>
  );
}

export default ProjectHeader;
