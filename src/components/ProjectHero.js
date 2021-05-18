import React from "react";
import "./ProjectHero.css";

function ProjectHero(props) {
  return (
    <div className={`project-hero ${props.project}`}>
      <div className="project-hero-container">
        <img src={props.imgSrc} />
      </div>
    </div>
  );
}

export default ProjectHero;
