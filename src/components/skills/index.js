import React from 'react';
import { CodeSandboxOutlined } from '@ant-design/icons'; 
import { Container, ContainerTitle, Title, Line, Text, Cards, Card, Icon, Lenguage, Description } from "./style";

function Skills(props) {

	const lightPink = "#e2a599";
	const lightBrown = "#715f69";
	const lightOrange = "#e45447";
	const lightblue = "#90acd1";

	return (
		<Container>
				<ContainerTitle>
					<Title>Linguagens e Ferramentas</Title>
					<Line/>
					<Text>Conheça as principais tecnologias do meu dia a dia</Text>
				</ContainerTitle>
				<Cards>
					<Card color={lightPink}>
						<Icon><CodeSandboxOutlined /></Icon>
						<Lenguage>HTML</Lenguage>
						<Description>Para construção da estrutura da página</Description>
					</Card>

					<Card color={lightBrown}>
						<Icon><CodeSandboxOutlined /></Icon>
						<Lenguage>CSS</Lenguage>
						<Description>Para estilização das telas</Description>
					</Card>
					
					<Card color={lightOrange}>
						<Icon><CodeSandboxOutlined /></Icon>
						<Lenguage>JS e React</Lenguage>
						<Description>Para o frontend das minhas aplicações</Description>
					</Card>
				
					<Card color={lightblue}>
						<Icon><CodeSandboxOutlined /></Icon>
						<Lenguage>Ruby e Ruby on Rails</Lenguage>
						<Description>Para o backend das minhas aplicações</Description>
					</Card>
				</Cards>
		</Container>
	);
}

export default Skills;
