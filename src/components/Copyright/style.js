import styled from 'styled-components'
import { theme } from '@theme'

export const Copyright = styled.div`
  background-color: ${theme.color.orange.light};
  text-align: center;
  padding: 16px;

  &, a {
    color: ${theme.color.white};
  }
  
  a {
    font-weight: 500;
  }
`
