import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./style";
import { Button } from "antd";

const Card = ({ article }) => {
  const { t } = useTranslation();
  const handleRedirect = (path) => (window.location.href = path);

  return (
    <Styled.Container>
      <Styled.Title>{t(`articles.${article.key}.title`)}</Styled.Title>
      <Styled.Description>
        {t(`articles.${article.key}.description`)}
      </Styled.Description>
      <Button
        type="primary"
        danger
        disabled={!article.link}
        onClick={() => handleRedirect(article.link)}
      >
        {t("articles.access")}
      </Button>
    </Styled.Container>
  );
};

export default Card;
