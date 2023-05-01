import React from 'react'
import { useTranslation } from 'react-i18next'
import { email, link } from '@services/links'
import * as Styled from './style'
import {
  GithubOutlined,
  LinkedinOutlined,
  MediumOutlined,
  InstagramOutlined,
  BookOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from '@ant-design/icons'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Styled.Footer id="contacts">
      <div>
        <Styled.Logo>{t('initials')}</Styled.Logo>
        <p>
          Sou uma desenvolvedora de software (focada em frontend) que trabalha
          com diversas ferramentas como React, Vue, Rails e Elixir.
        </p>

        <Styled.Icon
          href={link.github}
          target="_blank"
          rel="noreferrer"
          title={t('social.access.github')}
        >
          <GithubOutlined />
        </Styled.Icon>

        <Styled.Icon
          href={link.linkedin}
          target="_blank"
          rel="noreferrer"
          title={t('social.access.linkedin')}
        >
          <LinkedinOutlined />
        </Styled.Icon>

        <Styled.Icon
          href={link.medium}
          target="_blank"
          rel="noreferrer"
          title={t('social.access.mediumn')}
        >
          <MediumOutlined />
        </Styled.Icon>

        <Styled.Icon
          href={link.instagram}
          target="_blank"
          rel="noreferrer"
          title={t('social.access.instagram')}
        >
          <InstagramOutlined />
        </Styled.Icon>

        <Styled.Icon
          href={link.dev}
          target="_blank"
          rel="noreferrer"
          title={t('social.access.dev')}
        >
          <BookOutlined />
        </Styled.Icon>
      </div>

      <div>
        <Styled.Title>Let’s work together!</Styled.Title>
        <Styled.Contact>
          <EnvironmentOutlined />
          <address>Santo André - SP, Brasil</address>
        </Styled.Contact>
        <Styled.Contact>
          <MailOutlined />
          <a href={`mailto:${email}`}>{email}</a>
        </Styled.Contact>
      </div>

      <Styled.ContentList>
        <Styled.Subtitle>Conteúdos</Styled.Subtitle>
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
          <a href="#education">Educação</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
      </Styled.ContentList>
    </Styled.Footer>
  )
}

export default Footer
