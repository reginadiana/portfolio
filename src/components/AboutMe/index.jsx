import React from 'react'

import AboutWebsite from '@assets/images/about/site.jpeg'
import AboutMeImg from '@assets/images/about/me.jpeg'

import SectionTitle from '@ui/SectionTitle'
import * as Styled from './style'

const AboutMe = () => {
  return (
    <Styled.Section id="about_me">
      <Styled.Img
        src={AboutMeImg}
        alt="Mulher com olhos castanhos em evidência"
      />
      <div>
        <SectionTitle title="Sobre mim" description="Quem é a Diana?" />
        <Styled.Paragraphy>
          Sou uma mulher <strong>criativa</strong>, <strong>organizada</strong>,
          e <strong>muito dedicada</strong>. Gosto de ler, dançar, pintar,
          assistir séries sobre ficção cientifica, crimes e suspense.
        </Styled.Paragraphy>
        <Styled.Paragraphy>
          Já deu para notar que gosto de arte e tudo que é intenso. Mas a
          calmaria é bem vinda sempre.
        </Styled.Paragraphy>
        <Styled.Paragraphy>
          Se você veio aqui conhecer o meu trabalho, saiba que sou apaixonada
          pelo que faço e estou sempre tentando fazer melhor, porque
          <strong>sempre dá.</strong>
        </Styled.Paragraphy>
      </div>

      <div>
        <SectionTitle
          title="Sobre este site"
          description="Sempre foi uma evolução"
        />
        <Styled.Paragraphy>
          Esse site é uma prova disso, ele é a terceira versão do que tenho
          tentando fazer desde 2019: o meu <strong>portfólio.</strong>
        </Styled.Paragraphy>
        <Styled.Paragraphy>
          Entre ajustes no design, responsivo nas tecnologias ele veio da
          primeira versão com um simples HTML e CSS ao React, levando uma
          maturidade bem maior que quem está por trás de sua criação.
        </Styled.Paragraphy>
        <Styled.Paragraphy>
          Novas alterações em 2022 incluiram uma mudança geral no layout,
          possibilidade de acessar o site tanto nos idiomas português como no
          inglês e navegação mais prática nas versões mobile e desktop
        </Styled.Paragraphy>
      </div>
      <Styled.Img
        src={AboutWebsite}
        alt="Iphone da cor preta acompanhado de uma caneta também da cor preta"
      />
    </Styled.Section>
  )
}

export default AboutMe
