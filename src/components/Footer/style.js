import styled from 'styled-components'
import { theme } from '@theme'

export const Footer = styled.footer`
  padding: 16px 16px 8px;

  /* Tablet */
  @media screen and (min-width: 832px) {
    padding: 24px 32px 64px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px;
  }

  @media screen and (min-width: 1440px) {
    width: 1170px;
    margin: auto;
  }
`

export const Logo = styled.h1`
  color: ${theme.color.orange.light};
  border: 3px ${theme.color.orange.light} solid;
  padding: 5px 0;
  width: 60px;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 16px;
`

export const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  svg {
    font-size: 24px;
    padding-right: 8px;
    color: ${theme.color.gray.regular};
  }

  a {
    color: black;
  }
`

export const Icon = styled.a`
  font-size: 1.8rem;
  color: ${theme.color.gray.regular};

  :not(:last-child) {
    padding-right: 16px;
  }

  &:hover {
    color: ${theme.color.orange.light};
    transition: 0.5s;
  }
`

export const ContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 8px;
  }

  a {
    color: black;
  }
`
