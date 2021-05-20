import React from "react";
import "./ProjectSection.css";
import Fade from "react-reveal";

function ProjectSection(props) {
  return (
    <div className={`project-section ${props.bg}`}>
      <div className="project-section-container">
        <Fade bottom>
          <h3 className={`section-title ${props.proj}-text`}>
            {props.sectionTitle}
          </h3>
        </Fade>
        {props.children}
      </div>
    </div>
  );
}

export default ProjectSection;
