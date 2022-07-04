import React, { useState } from "react";
import { Cards, Container, Options, Button } from "./style";
import ProjectsFrontend from "./ProjectsFrontend/index";
import ProjectsBackend from "./ProjectsBackend/index";
import TitleSection from "../TitleSection/index";

const Portfolio = () => {
  const [activeChoice, setActiveChoice] = useState("all");

  const options = [
    {
      key: "all",
      description: "Todos",
    },
    {
      key: "front",
      description: "Frontend",
    },
    {
      key: "back",
      description: "Backend",
    },
  ];

  return (
    <Container id="portfolio">
      <TitleSection title="Projetos" />
      <Cards>
        <Options>
          {options.map((option, index) => {
            return (
              <Button
                key={index}
                onClick={() => setActiveChoice(option.key)}
                active={activeChoice === option.key}
              >
                {option.description}
              </Button>
            );
          })}
        </Options>
        {(activeChoice === "front" || activeChoice === "all") && (
          <ProjectsFrontend />
        )}
        {(activeChoice === "back" || activeChoice === "all") && (
          <ProjectsBackend />
        )}
      </Cards>
    </Container>
  );
};

export default Portfolio;
