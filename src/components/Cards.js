import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import projectDataJSON from "../projectData.json";

function Cards() {
  const projectData = projectDataJSON;

  return (
    <div className="cards">
      <h1>Design Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={projectData["goshen"]["src"]}
              text={projectData["goshen"]["text"]}
              label={projectData["goshen"]["label"]}
              description={projectData["goshen"]["description"]}
              path={projectData["goshen"]["path"]}
            />
            <CardItem
              src={projectData["netflix"]["src"]}
              text={projectData["netflix"]["text"]}
              label={projectData["netflix"]["label"]}
              path={projectData["netflix"]["path"]}
            />
            <CardItem
              src={projectData["peregrine"]["src"]}
              text={projectData["peregrine"]["text"]}
              label={projectData["peregrine"]["label"]}
              path={projectData["peregrine"]["path"]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
