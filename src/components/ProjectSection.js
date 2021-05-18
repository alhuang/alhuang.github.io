import React from "react";
import "./ProjectSection.css";

function ProjectSection(props) {
  return (
    <div className={`project-section ${props.bg}`}>
      <div className="project-section-container">
        <h3 className={`section-title ${props.proj}-text`}>
          {props.sectionTitle}
        </h3>
        {props.children}
      </div>
    </div>
  );
}

export default ProjectSection;
