import React from "react";
import ProjectHeader from "../ProjectHeader";
import ProjectHero from "../ProjectHero";
import Footer from "../Footer";
import Content from "../Content";
import projectDataJSON from "../../projectData.json";
import Iterations from "../Iterations";

function Peregrine() {
  const content = projectDataJSON["peregrine"];
  return (
    <>
      <ProjectHero imgSrc={content["src"]} project={"peregrine"} />
      <ProjectHeader
        projectTitle={content["text"]}
        label={content["label"]}
        role={content["role"]}
        timeline={content["timeline"]}
        skills={content["skills"]}
        projectSummary={content["projectDescription"]}
        projectGoals={content["projectGoals"]}
      />
      <Content project="peregrine" />
      <Footer />
    </>
  );
}

export default Peregrine;
