import React, { useEffect, useState } from "react";
import { Cards, Container, Options, Button } from "../Portfolio/style";

import TitleSection from "../TitleSection/index";
import Articles from "./Articles/index";
import Lives from "./Lives/index";
import Certificates from "./Certificates/index";

const defaultChoices = {
  all: false,
  articles: false,
  lives: false,
  certificates: false,
};

const Others = () => {
  const [choice, setChoice] = useState(defaultChoices);
  const active = true;

  useEffect(() => {
    setChoice({ ...defaultChoices, all: true });
  }, []);

  return (
    <Container id="others">
      <TitleSection title="Eventos, Artigos e Certificados" />
      <Cards>
        <Options>
          <Button
            onClick={() => setChoice({ ...defaultChoices, all: active })}
            active={choice.all}
          >
            Todos
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
          <Button
            onClick={() =>
              setChoice({ ...defaultChoices, certificates: active })
            }
            active={choice.certificates}
          >
            Certificados
          </Button>
        </Options>
        {(choice.articles || choice.all) && <Articles />}
        {(choice.lives || choice.all) && <Lives />}
        {(choice.certificates || choice.all) && <Certificates />}
      </Cards>
    </Container>
  );
};

export default Others;
