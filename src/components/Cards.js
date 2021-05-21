import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import projectDataJSON from "../projectData.json";
import Fade from "react-reveal";

function Cards() {
  const projectData = projectDataJSON;

  return (
    <div className="cards" id="cards-section">
      <Fade duration={2000} delay={1000}>
        <h1>Design Projects</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={projectData["goshen"]["cardImg"]}
                text={projectData["goshen"]["text"]}
                label={projectData["goshen"]["label"]}
                description={projectData["goshen"]["description"]}
                path={projectData["goshen"]["path"]}
                proj={"goshen"}
              />
              <CardItem
                src={projectData["netflix"]["cardImg"]}
                text={projectData["netflix"]["text"]}
                label={projectData["netflix"]["label"]}
                path={projectData["netflix"]["path"]}
                proj={"netflix"}
              />
              <CardItem
                src={projectData["peregrine"]["cardImg"]}
                text={projectData["peregrine"]["text"]}
                label={projectData["peregrine"]["label"]}
                path={projectData["peregrine"]["path"]}
                proj={"peregrine"}
              />
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Cards;
