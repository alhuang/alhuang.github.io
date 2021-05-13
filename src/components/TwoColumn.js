import React from "react";
import "./TwoColumn.css";

function TwoColumn(props) {
  const leftContent = props.left;
  return (
    <div className="container">
      {leftContent === true ? (
        <>
          <div className="left">
            <p>{props.body}</p>
          </div>
          <div className="right">
            <img className="project-image" src={props.imgSrc} />
          </div>
        </>
      ) : (
        <>
          <div className="left">
            <img className="project-image" src={props.imgSrc} />
          </div>
          <div className="right">
            <p>{props.body}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default TwoColumn;
