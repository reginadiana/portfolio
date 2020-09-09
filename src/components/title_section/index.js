import React from 'react';
import { Container, Title, Line, Text } from "./style";

function TitleSection(props) {

  const { title, description } = props;

	return (
    <Container>
      <Title>{title}</Title>
      <Line/>
      <Text>{description}</Text>
    </Container>
	);
}

export default TitleSection;