import React from "react";
import * as Styled from "./style";
import TitleSection from "../TitleSection/index";
import AboutMeImg from "../../assets/about/me.jpeg";
import AboutWebsite from "../../assets/about/site.jpeg";

const AboutMe = () => (
  <Styled.Wrapper id="about_me">
    <Styled.Img src={AboutMeImg} />
    <div>
      <TitleSection title="Sobre mim" description="Quem é a Diana?" />
      <Styled.Paragraphy>
        Sou uma mulher <strong>criativa</strong>, <strong>organizada</strong>, e{" "}
        <strong>muito</strong> dedicada. Gosto de ler, dançar, pintar, assistir
        séries sobre ficção cientifica, crimes e suspense.
      </Styled.Paragraphy>
      <Styled.Paragraphy>
        Já deu para notar que gosto de arte e tudo que é intenso. Mas a calmaria
        é bem vinda sempre.
      </Styled.Paragraphy>
      <Styled.Paragraphy>
        Se você veio aqui conhecer o meu trabalho, saiba que sou apaixonada pelo
        que faço e estou sempre tentando fazer melhor,{" "}
        <strong>porque sempre dá.</strong>
      </Styled.Paragraphy>
    </div>

    <div>
      <TitleSection
        title="Sobre este site"
        description="Sempre foi uma evolução"
      />
      <Styled.Paragraphy>
        Esse site é uma prova disso, ele é a terceira versão do que tenho
        tentando fazer desde 2019: o meu <strong>portfólio.</strong>
      </Styled.Paragraphy>
      <Styled.Paragraphy>
        Entre ajustes no design, responsivo nas tecnologias ele veio da primeira
        versão com um simples HTML e CSS ao React, levando uma maturidade bem
        maior que quem está por trás de sua criação.
      </Styled.Paragraphy>
    </div>
    <Styled.Img src={AboutWebsite} />
  </Styled.Wrapper>
);

export default AboutMe;
