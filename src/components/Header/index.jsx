import React, { useState } from 'react'
import { Button, Typography } from 'antd'

import CV from '@assets/documents/cv.pdf'
import { theme } from '@theme'
import * as Styled from './style'

const { Title } = Typography

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [active, setActive] = useState('about_me')

  const handleOnClick = (e) => {
    const name = e.target.name
    setActive(name)
    scrollToSection(name)
    closeMenu()
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView()
    }
  }

  const closeMenu = () => setOpenMenu(false)

  const navigations = [
    { name: 'Sobre mim', key: 'about_me' },
    { name: 'Projetos', key: 'projects' },
    { name: 'Educação', key: 'education' },
    { name: 'Habilidades', key: 'skills' },
    { name: 'Contatos', key: 'contacts' },
  ]

  return (
    <header>
      <Styled.Menu openMenu={openMenu}>
        <Styled.Logo onClick={() => setOpenMenu(!openMenu)}>DR</Styled.Logo>
        <Styled.List className={!openMenu && 'closed'}>
          {navigations.map(({ name, key }, index) => (
            <Styled.ItemList
              key={index}
              active={active === key}
              onClick={handleOnClick}
              name={key}
            >
              {name}
            </Styled.ItemList>
          ))}
        </Styled.List>
      </Styled.Menu>

      <Styled.Main openMenu={openMenu}>
        <Title
          style={{
            fontSize: '5rem',
            textTransform: 'uppercase',
            margin: 0,
            color: theme.color.white,
          }}
        >
          Olá
        </Title>
        <Styled.Description>
          Sou desenvolvedora de software <span>frontend</span>
        </Styled.Description>
        <Title
          style={{
            textTransform: 'uppercase',
            color: theme.color.orange.light,
          }}
        >
          Diana Regina
        </Title>
        <Styled.Download target="_blank" href={CV}>Abrir Curriculo (PDF)</Styled.Download>
      </Styled.Main>
    </header>
  )
}

export default Header
