import React from "react";
import { portfolio } from "../../services/links";
import TitleSection from "../TitleSection/index";
import { useTranslation } from "react-i18next";
import * as Styled from "./style";
import Card from "./Card/index";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Styled.Section id="projects">
      <TitleSection
        title={t("projects.title")}
        description={t("projects.description")}
        invertedTheme
      />

      <Styled.Cards>
        {portfolio.projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </Styled.Cards>
    </Styled.Section>
  );
};

export default Projects;
