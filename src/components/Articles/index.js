import React from "react";
import TitleSection from "../TitleSection/index";
import { portfolio } from "../../services/links";
import { useTranslation } from "react-i18next";
import * as Styled from "./style";
import Card from "./Card";

const Articles = () => {
  const { t } = useTranslation();

  return (
    <Styled.Section id="articles">
      <TitleSection
        title={t("articles.title")}
        description={t("articles.description")}
      />
      <Styled.Cards>
        <Styled.Cards>
          {portfolio.articles.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </Styled.Cards>
      </Styled.Cards>
    </Styled.Section>
  );
};

export default Articles;
