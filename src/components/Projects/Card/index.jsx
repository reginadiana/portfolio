import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./style";
import { Button } from "antd";

const Card = ({ project }) => {
  const { t } = useTranslation();

  const handleRedirect = (path) => (window.location.href = path);

  return (
    <Styled.Container>
      <Styled.Title>{t(`projects.${project.key}.title`)}</Styled.Title>
      <Styled.Description>
        {t(`projects.${project.key}.description`)}
      </Styled.Description>
      <Styled.Tags>
        {project.techs.map((tech, key) => (
          <Styled.Tag key={key}>{tech}</Styled.Tag>
        ))}
      </Styled.Tags>
      <Styled.Actions>
        <Button danger onClick={() => handleRedirect(project.github)}>
          {t("projects.access.github")}
        </Button>
        <Button
          type="primary"
          danger
          disabled={!project.deploy}
          onClick={() => handleRedirect(project.deploy)}
        >
          {t("projects.access.site")}
        </Button>
      </Styled.Actions>
    </Styled.Container>
  );
};

export default Card;
