import React from "react";
import * as Styled from "./style";
import { Button } from "antd";

const Card = ({ project }) => {
  const handleRedirect = (path) => (window.location.href = path);

  return (
    <Styled.Container>
      <Styled.Title>{project.title}</Styled.Title>
      <Styled.Description>{project.description}</Styled.Description>
      <Button
        type="primary"
        danger
        disabled={!project.link}
        onClick={() => handleRedirect(project.link)}
      >
        Artigo Completo
      </Button>
    </Styled.Container>
  );
};

export default Card;
