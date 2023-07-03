import React, { useState } from 'react'
import CV from '@assets/documents/cv.pdf'
import * as Styled from './style'

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
    { name: 'Sobre mim', key: 'about_me'}, 
    { name: 'Projetos', key: 'projects'}, 
    { name: 'Educação', key: 'education'},
    { name: 'Habilidades', key: 'skills'},
    { name: 'Contatos', key: 'contacts'}
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
        <Styled.Hello>Olá</Styled.Hello>
        <Styled.Description>
          Sou desenvolvedora de software <span>frontend</span>
        </Styled.Description>
        <Styled.Author>Diana Regina</Styled.Author>
        <Styled.Download>
          <Styled.Link href={CV}>
            Abrir Curriculo (PDF)
          </Styled.Link>
        </Styled.Download>
      </Styled.Main>
    </header>
  )
}

export default Header
