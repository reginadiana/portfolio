import styled from 'styled-components'
import { theme } from '@theme'

const MIN_WIDTH = '1440px';
const MAX_WIDTH = '1439px';

export const Section = styled.section`
  background-color: ${theme.color.orange.light};
  padding: 16px 16px 8px;

  @media screen and (min-width: ${MIN_WIDTH}) {
    padding: 24px 32px 64px;
  }
`

export const Images = styled.div`
  @media screen and (min-width: ${MIN_WIDTH}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;

    .w-200 {
      width: 600px;
    }

    .w-300 {
      max-width: 300px;
    }
  }

  @media screen and (min-width: ${MIN_WIDTH}) {
    width: 80%;
    margin: auto;
  }
`

export const Container = styled.div`
  @media screen and (max-width: ${MAX_WIDTH}) {
    .desktop {
      display: none;
    }
  }

  @media screen and (min-width: ${MIN_WIDTH}) {
    .mobile {
      display: none;
    }
  }
`
