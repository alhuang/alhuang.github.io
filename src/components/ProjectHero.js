import React from "react";
import "./ProjectHero.css";
import Zoom from "react-reveal";

function ProjectHero(props) {
  return (
    <div className={`project-hero ${props.project}`}>
      <div className="project-hero-container">
        <Zoom top>
          <img src={props.imgSrc} id={`${props.project}-hero`} />
        </Zoom>
      </div>
    </div>
  );
}

export default ProjectHero;
