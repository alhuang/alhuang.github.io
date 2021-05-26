import React from "react";
import projectDataJSON from "../../projectData.json";
import "./About.css";

function About() {
  const content = projectDataJSON["about"];
  return (
    <div className="about__section" id="about-section">
      <div className="about__container">
        <div className="about-left">
          {/* <div className="img-wrapper"> */}
          <img className="about-image" src={content["img"]} />
          {/* </div> */}
        </div>
        <div className="about-right">
          <div className="about-right-content">
            <h1 className="about-header">{content["title"]}</h1>
            <p>{content["desc"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
