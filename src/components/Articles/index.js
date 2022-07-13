import React from "react";
import TitleSection from "../TitleSection/index";
import { portfolio } from "../../services/links";
import * as Styled from "./style";
import Card from "./Card";

const Articles = () => (
  <Styled.Section id="articles">
    <TitleSection title="Artigos" description="Acompanhe o que escrevo" />
    <Styled.Cards>
      <Styled.Cards>
        {portfolio.articles.map((article, index) => (
          <Card key={index} article={article} />
        ))}
      </Styled.Cards>
    </Styled.Cards>
  </Styled.Section>
);

export default Articles;
