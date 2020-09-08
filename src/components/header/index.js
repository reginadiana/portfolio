import React from 'react'
import { Container, Menu, Logo, List, ItemList, Main, Title, Subtitle } from "./style"

function Header(props) {
	return (
		<Container>
			<Menu>
				<Logo>
					Diana Regina | Web Developer
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
				<Title>DIANA</Title>
				<Title>REGINA</Title>
				<Subtitle>Web Developer</Subtitle>
			</Main>
		</Container>
	);
}

export default Header;
