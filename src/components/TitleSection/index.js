import React from "react";
import * as Styled from "./style";

const TitleSection = ({ title }) => (
  <div>
    <Styled.Title>{title}</Styled.Title>
    <Styled.Line />
  </div>
);

export default TitleSection;
