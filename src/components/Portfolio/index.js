import React, { useEffect, useState } from "react";
import { Cards, Container, Options, Button } from "./style";

import TitleSection from "../TitleSection/index";
import ProjectsFrontend from "./ProjectsFrontend/index";
import ProjectsBackend from "./ProjectsBackend/index";
import Articles from "./Articles/index";
import Lives from "./Lives/index";

import { themes } from "../../themes";

const { lightOrange, lightBlue } = themes.colors;

const disable = {
  status: false,
  color: lightBlue,
};

const active = {
  status: true,
  color: lightOrange,
};

const defaultChoices = {
  all: disable,
  frontend: disable,
  backend: disable,
  articles: disable,
  lives: disable,
};

const Portfolio = () => {
  const [choice, setChoice] = useState(defaultChoices);

  useEffect(() => {
    setChoice({ ...defaultChoices, all: active });
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
          color={choice.all.color}
        >
          Todos
        </Button>
        <Button
          onClick={() => setChoice({ ...defaultChoices, frontend: active })}
          color={choice.frontend.color}
        >
          Frontend
        </Button>
        <Button
          onClick={() => setChoice({ ...defaultChoices, backend: active })}
          color={choice.backend.color}
        >
          Backend
        </Button>
        <Button
          onClick={() => setChoice({ ...defaultChoices, articles: active })}
          color={choice.articles.color}
        >
          Artigos
        </Button>
        <Button
          onClick={() => setChoice({ ...defaultChoices, lives: active })}
          color={choice.lives.color}
        >
          Lives
        </Button>
      </Options>
      <Cards>
        {(choice.frontend.status || choice.all.status) && <ProjectsFrontend />}
        {(choice.backend.status || choice.all.status) && <ProjectsBackend />}
        {(choice.articles.status || choice.all.status) && <Articles />}
        {(choice.lives.status || choice.all.status) && <Lives />}
      </Cards>
    </Container>
  );
};

export default Portfolio;
