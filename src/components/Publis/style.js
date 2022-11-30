import styled from "styled-components";
import { theme } from "@theme";

export const Section = styled.section`
  background-color: ${theme.color.orange.light};
  padding: 48px 0;
`;

export const Images = styled.div`
  display: grid;
  justify-content: center;
  
  gap: 25px;

    /* Desktop */
    @media screen and (min-width: 1350px) {
      grid-template-columns: repeat(3, 300px);
  }
`;