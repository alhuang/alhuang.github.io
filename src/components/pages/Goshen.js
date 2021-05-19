import React, { useEffect } from "react";
import ProjectHeader from "../ProjectHeader";
import ProjectHero from "../ProjectHero";
import Footer from "../Footer";
import Content from "../Content";
import ScrollIndication from "../ScrollIndication";
import projectDataJSON from "../../projectData.json";

function Goshen() {
  const content = projectDataJSON["goshen"];
  useEffect(() => {
    document.title = "Goshen Salon Case Study";
  });

  return (
    <>
      {/* <ScrollIndication /> */}
      <ProjectHero imgSrc={content["src"]} project={"goshen"} />
      <ProjectHeader
        projectTitle={content["text"]}
        label={content["label"]}
        role={content["role"]}
        timeline={content["timeline"]}
        skills={content["skills"]}
        projectSummary={content["description"]}
        projectGoals={content["projectGoals"]}
      />
      <Content project="goshen" />
      <Footer />
    </>
  );
}

export default Goshen;
