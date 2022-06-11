import React, { useState } from "react";
import { Cards, Container, Options, Button } from "../Portfolio/style";

import TitleSection from "../TitleSection/index";
import Articles from "./Articles/index";
import Lives from "./Lives/index";
import Certificates from "./Certificates/index";

const Others = () => {
  const [activeChoice, setActiveChoice] = useState("all");

  const options = [
    {
      key: "all",
      description: "Todos",
    },
    {
      key: "articles",
      description: "Artigos",
    },
    {
      key: "lives",
      description: "Lives",
    },
    {
      key: "certificates",
      description: "Certificados",
    },
  ];

  return (
    <Container id="others">
      <TitleSection title="Eventos, Artigos e Certificados" />
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

        {(activeChoice === "articles" || activeChoice === "all") && (
          <Articles />
        )}
        {(activeChoice === "lives" || activeChoice === "all") && <Lives />}
        {(activeChoice === "certificates" || activeChoice === "all") && (
          <Certificates />
        )}
      </Cards>
    </Container>
  );
};

export default Others;
