import React from "react";
import * as Styled from "./style";
import { Button } from "antd";

const Card = ({ project }) => {
  const handleRedirect = (path) => (window.location.href = path);

  return (
    <Styled.Container>
      <Styled.Title>{project.title}</Styled.Title>
      <Styled.Description>{project.description}</Styled.Description>
      <Styled.Tags>
        {project.techs.map((tech, key) => (
          <Styled.Tag key={key}>{tech}</Styled.Tag>
        ))}
      </Styled.Tags>
      <Styled.Actions>
        <Button danger onClick={() => handleRedirect(project.github)}>
          Ver no Gihub
        </Button>
        <Button
          type="primary"
          danger
          disabled={!project.deploy}
          onClick={() => handleRedirect(project.deploy)}
        >
          Site
        </Button>
      </Styled.Actions>
    </Styled.Container>
  );
};

export default Card;
