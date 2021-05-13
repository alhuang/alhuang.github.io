import React from "react";
import "./Image.css";

function Image(props) {
  return <img className="project-image" src={props.src} />;
}

export default Image;
