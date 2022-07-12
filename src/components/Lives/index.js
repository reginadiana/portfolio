import React from "react";
import TitleSection from "../TitleSection/index";
import Card from "./Card";
import WallpaperReadme from "../../assets/portfolio/lives/readme.jpeg";
import WallpaperTreinaDev from "../../assets/portfolio/lives/treina.jpeg";
// import WallpaperMindex from "../../assets/portfolio/articles/mindfex.jpeg";
import { portfolio } from "../../services/links";
import * as Styled from "./style";

const Lives = () => {
  return (
    <Styled.Section id="lives">
      <TitleSection title="Lives" description="Me acompanhe na media" />
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

        <Card
          project={portfolio.lives.readme}
          src={WallpaperReadme}
          alt="Live sobre Readme"
        />

        <Card
          project={portfolio.lives.treinaDev}
          src={WallpaperTreinaDev}
          alt="Live sobre Treina Dev"
        />
      </Styled.Cards>
    </Styled.Section>
  );
};

export default Lives;
