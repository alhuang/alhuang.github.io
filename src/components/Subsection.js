import React from "react";
import "./Subsection.css";
import "../App.css";

function Subsection(props) {
  return (
    <div className="subsection">
      <p>{props.body}</p>
    </div>
  );
}

export default Subsection;
