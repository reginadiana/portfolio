import React from "react";
import { CodeSandboxOutlined } from "@ant-design/icons";
import TitleSection from "../TitleSection/index";
import { useTranslation } from "react-i18next";
import * as Styled from "./style";

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    "react",
    "typescript",
    "vue",
    "html",
    "css",
    "javascript",
    "jest",
    "antd",
    "vimeo",
    "git",
    "ruby",
    "rails",
    "elixir",
    "phoenix",
    "docker",
    "aws"
  ];

  return (
    <Styled.Section id="skills">
      <TitleSection
        title={t("skills.title")}
        description={t("skills.description")}
      />
      <Styled.Cards>
        {skills.map(skill => (
          <Styled.Card key={skill}>
            <Styled.Icon>
              <CodeSandboxOutlined />
            </Styled.Icon>
            <Styled.Title>{t(`skills.${skill}.title`)}</Styled.Title>
          </Styled.Card>
        ))}
      </Styled.Cards>
    </Styled.Section>
  );
};

export default Skills;
