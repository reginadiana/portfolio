import React from "react";
import * as Styled from "./style";
import { Button } from "antd";

const Card = ({ live }) => {
  const handleRedirect = (path) => (window.location.href = path);

  return (
    <Styled.Container>
      <Styled.Title>{live.title}</Styled.Title>
      <Styled.Description>{live.description}</Styled.Description>
      <Button
        type="primary"
        danger
        disabled={!live.link}
        onClick={() => handleRedirect(live.link)}
      >
        Acessar Live
      </Button>
    </Styled.Container>
  );
};

export default Card;
