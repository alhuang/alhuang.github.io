import React from "react";
import "./Section.css";
import Fade from "react-reveal";

function Section(props) {
  return (
    <Fade duration={2000} delay={1000}>
      <div className="section-container">
        {props.subsectionTitle !== "" && (
          <h2 className="subsection-title">{props.subsectionTitle}</h2>
        )}
        {props.children}
      </div>
    </Fade>
  );
}

export default Section;
