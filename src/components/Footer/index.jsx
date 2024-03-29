import React from 'react'
import { Typography } from 'antd'
import {
  GithubOutlined,
  LinkedinOutlined,
  MediumOutlined,
  BookOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from '@ant-design/icons'

import * as Styled from './style'

const { Title, Paragraph } = Typography;

const Footer = () => {
  return (
    <Styled.Footer id="contacts">
      <div>
        <Styled.Logo>DR</Styled.Logo>
        <Paragraph>
          Sou uma desenvolvedora de software (focada em frontend) que trabalha
          com diversas ferramentas como React, Vue, Rails e Elixir.
        </Paragraph>

        <Styled.Icon
          href='https://github.com/reginadiana'
          target="_blank"
          rel="noreferrer"
          title='Acessar meu perfil no Github'
        >
          <GithubOutlined />
        </Styled.Icon>

        <Styled.Icon
          href='https://www.linkedin.com/in/diana-regina/'
          target="_blank"
          rel="noreferrer"
          title='Acessar meu perfil no Linkedin'
        >
          <LinkedinOutlined />
        </Styled.Icon>

        <Styled.Icon
          href="https://medium.com/@dianareginadr19"
          target="_blank"
          rel="noreferrer"
          title='Acessar meu perfil no Mediumn'
        >
          <MediumOutlined />
        </Styled.Icon>

        <Styled.Icon
          href="https://dev.to/reginadiana"
          target="_blank"
          rel="noreferrer"
          title='Acessar meu perfil no Dev'
        >
          <BookOutlined />
        </Styled.Icon>
      </div>

      <div>
        <Title level={3}>Let's work together!</Title>
        <Styled.Contact>
          <EnvironmentOutlined />
          <address>Santo André - SP, Brasil</address>
        </Styled.Contact>
        <Styled.Contact>
          <MailOutlined />
          <a href='mailto:dianareginadr19@gmail.com'>dianareginadr19@gmail.com</a>
        </Styled.Contact>
      </div>

      <Styled.ContentList>
        <Title level={4}>Conteúdos</Title>
        <li>
          <a href="#about_me">Sobre mim</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#lives">Lives</a>
        </li>
        <li>
          <a href="#articles">Artigos</a>
        </li>
        <li>
          <a href="#publications">Publicações</a>
        </li>
        <li>
          <a href="#experience">Experiências</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
      </Styled.ContentList>
    </Styled.Footer>
  )
}

export default Footer
