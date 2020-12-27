import React, { useEffect, useState } from "react";
import { Cards, Container, Options, Button } from "./style";

import TitleSection from "../TitleSection/index";
import ProjectsFrontend from "./ProjectsFrontend/index";
import ProjectsBackend from "./ProjectsBackend/index";
import Articles from "./Articles/index";
import Lives from "./Lives/index";

const defaultChoices = {
  all: false,
  frontend: false,
  backend: false,
  articles: false,
  lives: false,
};

const Portfolio = () => {
  const [choice, setChoice] = useState(defaultChoices);
  const active = true;

  useEffect(() => {
    setChoice({ ...defaultChoices, all: true });
  }, []);

  return (
    <Container id="portfolio">
      <TitleSection
        title="Meus Projetos"
        description="Conheça o meu trabalho"
      />
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
        <Button
          onClick={() => setChoice({ ...defaultChoices, articles: active })}
          active={choice.articles}
        >
          Artigos
        </Button>
        <Button
          onClick={() => setChoice({ ...defaultChoices, lives: active })}
          active={choice.lives}
        >
          Lives
        </Button>
      </Options>
      <Cards>
        {(choice.frontend || choice.all) && <ProjectsFrontend />}
        {(choice.backend || choice.all) && <ProjectsBackend />}
        {(choice.articles || choice.all) && <Articles />}
        {(choice.lives || choice.all) && <Lives />}
      </Cards>
    </Container>
  );
};

export default Portfolio;
