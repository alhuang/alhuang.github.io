import React from "react";
import Iteration from "./Iteration";
import "./Iterations.css";

function Iterations(props) {
  return (
    <div className={`iterations-container-${props.className}`}>
      {props.iterations.map((iteration) => {
        return (
          <Iteration
            className={props.className}
            imgSrc={iteration["imgSrc"]}
            name={iteration["name"]}
            desc={iteration["desc"]}
          />
        );
      })}
    </div>
  );
}

export default Iterations;
