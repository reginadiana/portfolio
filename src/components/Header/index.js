import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import pdf from "../../services/document.pdf";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [fixedMenu, setFixedMenu] = useState(false);
  const [active, setActive] = useState("about_me");

  let pageYOffset = window.pageYOffset;
  const minOffset = 1000;

  const controlDirection = (e) => {
    e.preventDefault();

    if (window.pageYOffset <= minOffset) return;

    const isUpScroll = pageYOffset >= window.pageYOffset;

    setFixedMenu(isUpScroll);

    pageYOffset = window.pageYOffset;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  const handleOnClick = (e) => {
    setActive(e.target.name);
    closeMenu();
  };

  const closeMenu = () => setOpenMenu(false);

  return (
    <header>
      <Styled.Menu fixedMenu={fixedMenu} openMenu={openMenu}>
        <Styled.Logo onClick={() => setOpenMenu(!openMenu)}>DR</Styled.Logo>
        <Styled.List openMenu={openMenu}>
          <Styled.ItemList
            active={active === "about_me"}
            onClick={handleOnClick}
            href="#about_me"
            name="about_me"
          >
            Sobre mim
          </Styled.ItemList>
          <Styled.ItemList
            active={active === "projects"}
            onClick={handleOnClick}
            href="#projects"
            name="projects"
          >
            Projetos
          </Styled.ItemList>
          <Styled.ItemList
            active={active === "education"}
            onClick={handleOnClick}
            href="#education"
            name="education"
          >
            Formação
          </Styled.ItemList>
          <Styled.ItemList
            active={active === "skills"}
            onClick={handleOnClick}
            href="#skills"
            name="skills"
          >
            Habilidades
          </Styled.ItemList>
          <Styled.ItemList
            active={active === "contatos"}
            onClick={handleOnClick}
            href="#contatos"
            name="contatos"
          >
            Contatos
          </Styled.ItemList>
        </Styled.List>
      </Styled.Menu>

      <Styled.Main fixedMenu={fixedMenu} openMenu={openMenu}>
        <Styled.Hello>Hello.</Styled.Hello>
        <Styled.Description>
          Sou desenvolvedora de software <span>frontend</span>
        </Styled.Description>
        <Styled.Diana>DIANA REGINA</Styled.Diana>
        {/* <Styled.Download>
          <Styled.Link href={pdf}>Ver Curriculo (PDF)</Styled.Link>
        </Styled.Download> */}
      </Styled.Main>
    </header>
  );
};

export default Header;
