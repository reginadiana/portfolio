import React from "react";
import * as Styled from "./style";
import pdf from "../../services/document.pdf";

const Header = () => (
  <Styled.Container>
    <Styled.Menu>
      <Styled.Logo>DR</Styled.Logo>
      <Styled.List>
        <Styled.ItemList href="#about_me">Sobre mim</Styled.ItemList>
        <Styled.ItemList href="#portfolio">Portfólio</Styled.ItemList>
        <Styled.ItemList href="#education">Formação</Styled.ItemList>
        <Styled.ItemList href="#skills">Habilidades</Styled.ItemList>
        <Styled.ItemList href="#contatos">Contatos</Styled.ItemList>
      </Styled.List>
    </Styled.Menu>
    <Styled.Main>
      <Styled.Title>Hello. Diana</Styled.Title>
      <Styled.Subtitle>Software Developer - Frontend</Styled.Subtitle>
      <Styled.Download>
        <Styled.Link href={pdf}>Ver Curriculo (PDF)</Styled.Link>
      </Styled.Download>
    </Styled.Main>
  </Styled.Container>
);

export default Header;
