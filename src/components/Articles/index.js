import React from "react";
import TitleSection from "../TitleSection/index";
import { portfolio } from "../../services/links";
import Card from "./Card";
import * as Styled from "./style";

const Articles = () => (
  <Styled.Section id="articles">
    <TitleSection title="Artigos" description="Acompanhe o que escrevo" />
    <Styled.Cards>
      <Card project={portfolio.articles.readme} />
    </Styled.Cards>
  </Styled.Section>
);

export default Articles;
