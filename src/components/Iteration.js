import React from "react";

function Iteration(props) {
  return (
    <div className={`iteration-item-${props.className}`}>
      <img src={props.imgSrc} className="iteration-img" />
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

export default Iteration;
