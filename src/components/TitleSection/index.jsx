import React from "react";
import * as Styled from "./style";

const TitleSection = (props) => {
  const { title, description, invertedTheme = false } = props;

  return (
    <Styled.Container invertedTheme={invertedTheme}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Paragraphy>{description}</Styled.Paragraphy>
      <Styled.Line />
    </Styled.Container>
  );
};

export default TitleSection;
