import React from "react";
import "./BulletPoints.css";

function BulletPoints(props) {
  return (
    <ul className="bulletpoints">
      {props.bullets.map((bullet) => (
        <li className="bulletpoint-item">{bullet}</li>
      ))}
    </ul>
  );
}

export default BulletPoints;
