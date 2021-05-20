import React from "react";
import "./Section.css";
import Fade from "react-reveal";

function Section(props) {
  return (
    <Fade>
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
