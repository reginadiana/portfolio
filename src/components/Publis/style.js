import styled from 'styled-components'
import { theme } from '@theme'

export const Section = styled.section`
  background-color: ${theme.color.orange.light};
  padding: 16px 16px 32px;

  @media screen and (min-width: 1440px) {
    padding: 48px 0;
  }
`

export const Images = styled.div`
  display: flex;

  @media screen and (max-width: calc((300px * 2) + 16px + 16px - 1px)) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: calc((300px * 2) + 16px + 16px)) {
    flex-wrap: wrap;

    img {
      max-width: 300px;
    }
  }

  @media screen and (min-width: calc((300px * 3) + 16px + 16px)) {
    justify-content: center;
  }
`
