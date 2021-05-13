import React from "react";
import Subsection from "./Subsection";
import Section from "./Section";
import Image from "./Image";
import TwoColumn from "./TwoColumn";
import ImageRow from "./ImageRow";
import ProjectSection from "./ProjectSection";
import projectDataJSON from "../projectData.json";

function Content(props) {
  const content = projectDataJSON[props.project]["content"];
  return (
    <>
      {content.map((step, index) => (
        <ProjectSection
          sectionTitle={step["stepTitle"]}
          bg={index % 2 ? "" : "light-bg"}
        >
          {step["sections"].map((section) => (
            <Section subsectionTitle={section["sectionTitle"]}>
              {Object.keys(section).map((key) => {
                var component = key.split("_");
                if (component[0] === "sectionBody")
                  return <Subsection body={section[key]} />;
                else if (component[0] === "sectionImageSrc")
                  return <Image src={section[key]} />;
                else if (component[0] === "twoColumn")
                  return (
                    <TwoColumn
                      left={component[2] === "left" ? true : false}
                      body={section[key]["body"]}
                      imgSrc={section[key]["imgSrc"]}
                    />
                  );
                else if (component[0] === "sectionImageRow")
                  return <ImageRow images={section[key]} />;
              })}
            </Section>
          ))}
        </ProjectSection>
      ))}
    </>
  );
}

export default Content;
