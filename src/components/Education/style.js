import styled, { css } from 'styled-components'
import { theme } from '@theme'

export const Section = styled.section`
  padding: 16px 16px 8px;

   /* Tablet */
   @media screen and (min-width: 832px) {
    padding: 24px 32px 64px;
  }

  @media screen and (min-width: 1440px) {
    width: 1170px;
    margin: auto;
  }
`

export const Cards = styled.div`
  @media screen and (min-width: 832px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
`

export const Location = styled.a`
  font-size: 1rem;
  color: ${theme.color.black};
`

export const Description = styled.p`
  line-height: 30px;
`

export const Card = styled.div`
  background-color: ${theme.color.gray.light};
  padding: 8px 24px;
  color: ${theme.color.gray.self};
  border-radius: 10px;
  cursor: pointer;

  ${({ current }) => current && activeCardStyled};
`

const activeCardStyled = css`
  background-color: ${theme.color.orange.light};
  color: ${theme.color.white};

  ${Title},
  ${Location},
  ${Description} {
    color: ${theme.color.white};
  }

  ${Description} {
    font-size: 1rem;
  }
`
