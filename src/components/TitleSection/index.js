import React from "react";
import { Title, Line, Text } from "./style";

const TitleSection = ({ title, description }) => (
  <div>
    <Title>{title}</Title>
    <Line />
    <Text>{description}</Text>
  </div>
);

export default TitleSection;
