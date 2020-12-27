import React from "react";
import * as Styled from "./style";

const TitleSection = ({ title, description }) => (
  <div>
    <Styled.Title>{title}</Styled.Title>
    <Styled.Line />
    <Styled.Text>{description}</Styled.Text>
  </div>
);

export default TitleSection;
