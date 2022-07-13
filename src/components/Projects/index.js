import React from "react";
import { portfolio } from "../../services/links";
import * as Styled from "./style";
import Card from "./Card/index";

const Projects = () => {
  return (
    <Styled.Section id="projects">
      {/* <TitleSection
        title="Projetos"
        description="Conheça meus projetos no Github e em produção"
      /> */}

      <Styled.Container>
        <Styled.Title>Projetos</Styled.Title>
        <Styled.Paragraphy>
          Conheça meus projetos no Github e em produção
        </Styled.Paragraphy>
        <Styled.Line />
      </Styled.Container>

      <Styled.Cards>
        <Card project={portfolio.frontend.certificate} />
        <Card project={portfolio.frontend.amoPlantas} />
        <Card project={portfolio.frontend.ecommerce} />
        <Card project={portfolio.backend.headhunter} />
        <Card project={portfolio.backend.rentalCars} />
      </Styled.Cards>
    </Styled.Section>
  );
};

export default Projects;
