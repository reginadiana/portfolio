import React from "react";
import * as Styled from "./style";
import { Button } from "antd";

const Card = ({ article }) => {
  const handleRedirect = (path) => (window.location.href = path);

  return (
    <Styled.Container>
      <Styled.Title>{article.title}</Styled.Title>
      <Styled.Description>{article.description}</Styled.Description>
      <Button
        type="primary"
        danger
        disabled={!article.link}
        onClick={() => handleRedirect(article.link)}
      >
        Artigo Completo
      </Button>
    </Styled.Container>
  );
};

export default Card;
