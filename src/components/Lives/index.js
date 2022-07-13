import React from "react";
import TitleSection from "../TitleSection/index";
import Card from "./Card";
import { portfolio } from "../../services/links";
import * as Styled from "./style";

const Lives = () => (
  <Styled.Section id="lives">
    <TitleSection title="Lives" description="Me acompanhe na media" />
    <Styled.Cards>
      <Card project={portfolio.lives.readme} />
      <Card project={portfolio.lives.treinaDev} />
    </Styled.Cards>
  </Styled.Section>
);

export default Lives;
