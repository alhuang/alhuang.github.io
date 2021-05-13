import React from "react";
import "./ProjectSection.css";

function ProjectSection(props) {
  return (
    <div className={`project-section ${props.bg}`}>
      <div className="project-section-container">
        <h1 className="section-title">{props.sectionTitle}</h1>
        {props.children}
      </div>
    </div>
  );
}

export default ProjectSection;
