import React from 'react';
import { CodeSandboxOutlined } from '@ant-design/icons'; 
import { Container, Cards, Card, Icon, Lenguage, Description } from "./style";
import TitleSection from '../title_section/index';
import { lightPink, lightBrown, lightOrange, lightBlue } from '../../style'

function Skills(props) {

	return (
		<Container>
				<TitleSection 
					title="Linguagens e Ferramentas" 
					description="Conheça as principais tecnologias do meu dia a dia"
				/>
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
				
					<Card color={lightBlue}>
						<Icon><CodeSandboxOutlined /></Icon>
						<Lenguage>Ruby e Ruby on Rails</Lenguage>
						<Description>Para o backend das minhas aplicações</Description>
					</Card>
				</Cards>
		</Container>
	);
}

export default Skills;
