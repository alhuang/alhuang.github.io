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
      <ProjectHero imgSrc={content["src"]} project={"netflix"} />
      <ProjectHeader
        projectTitle={content["text"]}
        label={content["label"]}
        role={content["role"]}
        timeline={content["timeline"]}
        skills={content["skills"]}
        projectSummary={content["description"]}
        projectGoals={content["projectGoals"]}
      />
      <Content project="netflix" />
      <Footer />
    </>
  );
}

export default Netflix;
