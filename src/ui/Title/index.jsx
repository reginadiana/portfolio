import React from "react";

import * as Styled from "./style";

const Title = ({ title, description, invertedTheme = false }) => {
  return (
    <Styled.Container invertedTheme={invertedTheme}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Paragraphy>{description}</Styled.Paragraphy>
      <Styled.Line />
    </Styled.Container>
  );
};

export default Title;
