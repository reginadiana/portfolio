import React from "react";
import { CodeSandboxOutlined } from "@ant-design/icons";
import TitleSection from "../TitleSection/index";
import { useTranslation } from "react-i18next";
import * as Styled from "./style";

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    "html",
    "css",
    "js",
    "react",
    "vue",
    "typescript",
    "jest",
    "antd",
    "vimeo",
    "git",
    "ror",
    "elixir",
    "docker",
  ];

  return (
    <Styled.Section id="skills">
      <TitleSection
        title={t("skills.title")}
        description={t("skills.description")}
      />
      <Styled.Cards>
        {skills.map((skill, index) => (
          <Styled.Card key={index}>
            <Styled.Span>
              <CodeSandboxOutlined />
            </Styled.Span>
            <Styled.TH3>{t(`skills.${skill}.title`)}</Styled.TH3>
            <Styled.Paragraphy>
              {t(`skills.${skill}.description`)}
            </Styled.Paragraphy>
          </Styled.Card>
        ))}
      </Styled.Cards>
    </Styled.Section>
  );
};

export default Skills;
