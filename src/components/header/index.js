import React from 'react';
import { Container, Menu, Logo, List, 
				 ItemList, Main, Title, Subtitle, Button } from "./style"

function Header(props) {
	return (
		<Container>
			<Menu>
				<Logo>
					DR
				</Logo>
				<List>
					<ItemList>Sobre mim</ItemList>
					<ItemList>Valores</ItemList>
					<ItemList>Portfólio</ItemList>
					<ItemList>Skills</ItemList>
					<ItemList>Eventos</ItemList>
				</List>
			</Menu>
			<Main>
				<Title>Diana Regina</Title>
				<Subtitle>Web Developer</Subtitle>
				<Button>Baixar Curriculo</Button>
			</Main>
		</Container>
	);
}

export default Header;
