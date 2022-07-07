import React from "react";
import * as Styled from "./style";

const TitleSection = (props) => {
  const { title, description } = props;

  return (
    <Styled.Section>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Paragraphy>{description}</Styled.Paragraphy>
      <Styled.Line />
    </Styled.Section>
  );
};

export default TitleSection;
