import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./style";
import { Button } from "antd";

const Card = ({ live }) => {
  const { t } = useTranslation();
  const handleRedirect = (path) => (window.location.href = path);

  return (
    <Styled.Container>
      <Styled.Title>{t(`lives.${live.key}.title`)}</Styled.Title>
      <Styled.Description>
        {t(`lives.${live.key}.description`)}
      </Styled.Description>
      <Button
        type="primary"
        danger
        disabled={!live.link}
        onClick={() => handleRedirect(live.link)}
      >
        {t("lives.access")}
      </Button>
    </Styled.Container>
  );
};

export default Card;
