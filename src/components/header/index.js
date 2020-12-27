import React from "react";
import {
  Container,
  Menu,
  Logo,
  List,
  ItemList,
  Main,
  Title,
  Subtitle,
  Link,
  Download,
} from "./style";
import pdf from "../../services/document.pdf";

const Header = () => (
  <Container>
    <Menu>
      <Logo>DR</Logo>
      <List>
        <ItemList href="#about_me">About Me</ItemList>
        <ItemList href="#portfolio">Portfólio</ItemList>
        <ItemList href="#skills">Skills</ItemList>
        <ItemList href="#contatos">Contatos</ItemList>
      </List>
    </Menu>
    <Main>
      <Title>Diana Regina</Title>
      <Subtitle>Web Developer</Subtitle>
      <Download>
        <Link href={pdf}>Ver Curriculo (PDF)</Link>
      </Download>
    </Main>
  </Container>
);

export default Header;
