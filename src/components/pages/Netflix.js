import React from "react";
import ProjectHeader from "../ProjectHeader";
import ProjectHero from "../ProjectHero";
import Footer from "../Footer";
import Content from "../Content";
import projectDataJSON from "../../projectData.json";

function Netflix() {
  const content = projectDataJSON["netflix"];
  return (
    <>
      <ProjectHero imgSrc={content["src"]} />
      <ProjectHeader
        projectTitle={content["text"]}
        projectSummary={content["description"]}
      />
      <Content project="netflix" />
      <Footer />
    </>
  );
}

export default Netflix;
