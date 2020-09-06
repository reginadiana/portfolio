import React from 'react'
import { Container, Menu, Logo, List, ItemList, Main, Title, Button } from "./style"

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
				<Title>Web Developer | Ruby on Rails | React</Title>
				<Button>Entrar em contato</Button>
			</Main>
		</Container>
	);
}

export default Header;
