import React from "react";
import * as Styled from "./style";

const TitleSection = ({ title }) => (
  <>
    <Styled.Title>{title}</Styled.Title>
    <Styled.Line />
  </>
);

export default TitleSection;
