import styled from 'styled-components'
import { theme } from '@theme'

export const Section = styled.section`
  background-color: ${theme.color.gray.light};
  padding: 16px 16px 32px;

  @media screen and (min-width: 1440px) {
    padding: 48px 0;
  }
`

export const Cards = styled.div`
  display: grid;

  /* Desktop */
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 50%);
    gap: 64px;
    width: 1170px;
    margin: auto;
  }
`

export const Card = styled.div`
  background-color: ${theme.color.gray.light};
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-weight: 500;
  color: ${theme.color.black};
  line-height: 27px;
  font-size: 18px;
`;

export const Description = styled.p`
  color: ${theme.color.black};
  text-align: justify;
  margin-bottom: 32px;
`;
