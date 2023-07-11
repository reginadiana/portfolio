import styled from 'styled-components'
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
  display: grid;
  gap: 16px;
  
  @media screen and (min-width: 832px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Card = styled.a`
  background-color: ${theme.color.gray.light};
  padding: 8px 24px 16px;
  color: ${theme.color.gray.self};
  border-radius: 10px;
`
