import React from "react";
import "./Section.css";

function Section(props) {
  return (
    <div className="section-container">
      <h2 className="subsection-title">{props.subsectionTitle}</h2>
      {props.children}
    </div>
  );
}

export default Section;
