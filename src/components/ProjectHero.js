import React from "react";
import "./ProjectHero.css";

function ProjectHero(props) {
  return (
    <div className="project-hero-container">
      <div className="project-hero-wrapper">
        <img src={props.imgSrc} />
      </div>
    </div>
  );
}

export default ProjectHero;
