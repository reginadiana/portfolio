import styled from 'styled-components'
import { theme } from '@theme'

export const Section = styled.section`
  padding: 16px 16px 32px;

  /* Tablet */
  @media screen and (min-width: 832px) {
    padding: 24px 32px 64px;
  }

  @media screen and (min-width: 1440px) {
    width: 1170px;
    margin: auto;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 700;
  color: #16181B;
`

export const Cards = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 890px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Icon = styled.span`
  color: ${theme.color.white};
  font-size: 2rem;
  margin-right: 8px;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.color.orange.light};
  padding: 0 16px 0 8px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: translateY(-3%);
    transition: 0.5s;
  }
`

export const Subtitle = styled.h3`
  color: ${theme.color.white};
  font-size: 14px;
  line-height: 1.5;
  font-weight: 700;
`
