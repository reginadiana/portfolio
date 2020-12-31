import React, { useEffect, useState } from "react";
import { Cards, Container, Options, Button } from "./style";

import TitleSection from "../TitleSection/index";
import ProjectsFrontend from "./ProjectsFrontend/index";
import ProjectsBackend from "./ProjectsBackend/index";

const defaultChoices = {
  all: false,
  frontend: false,
  backend: false,
};

const Portfolio = () => {
  const [choice, setChoice] = useState(defaultChoices);
  const active = true;

  useEffect(() => {
    setChoice({ ...defaultChoices, all: true });
  }, []);

  return (
    <Container id="portfolio">
      <TitleSection title="Projetos" />
      <Cards>
        <Options>
          <Button
            onClick={() => setChoice({ ...defaultChoices, all: active })}
            active={choice.all}
          >
            Todos
          </Button>
          <Button
            onClick={() => setChoice({ ...defaultChoices, frontend: active })}
            active={choice.frontend}
          >
            Frontend
          </Button>
          <Button
            onClick={() => setChoice({ ...defaultChoices, backend: active })}
            active={choice.backend}
          >
            Backend
          </Button>
        </Options>
        {(choice.frontend || choice.all) && <ProjectsFrontend />}
        {(choice.backend || choice.all) && <ProjectsBackend />}
      </Cards>
    </Container>
  );
};

export default Portfolio;
