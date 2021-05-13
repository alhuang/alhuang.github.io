import React from "react";
import ProjectHeader from "../ProjectHeader";
import ProjectHero from "../ProjectHero";
import Footer from "../Footer";
import Content from "../Content";
import projectDataJSON from "../../projectData.json";

function Peregrine() {
  const content = projectDataJSON["peregrine"];
  return (
    <>
      <ProjectHero imgSrc={content["src"]} />
      <ProjectHeader
        projectTitle={content["text"]}
        projectSummary={content["description"]}
      />
      <Content project="peregrine" />
      <Footer />
    </>
  );
}

export default Peregrine;
