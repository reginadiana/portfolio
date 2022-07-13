import React from "react";
import TitleSection from "../TitleSection/index";
import Card from "./Card";
import { portfolio } from "../../services/links";
import * as Styled from "./style";

const Articles = () => {
  return (
    <Styled.Section id="articles">
      <TitleSection title="Artigos" description="Acompanhe o que escrevo" />
      <Styled.Cards>
        {/* TODO: Abrir nova página para trazer os meus artigos */}
        {/* <Card
          project={portfolio.articles.readme}
          src={WallpaperReadme}
          alt="Artigo Readme"
        />
        <Card
          project={portfolio.articles.mindlex}
          src={WallpaperMindex}
          alt="Artigo Mindlex"
        />

        <Card
          project={portfolio.articles.arduino}
          src={WallpaperMindex}
          alt="Artigo Arduino"
        /> */}

        <Card project={portfolio.articles.readme} />
      </Styled.Cards>
    </Styled.Section>
  );
};

export default Articles;
