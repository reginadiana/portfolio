import styled from "styled-components";
import { theme } from "@theme";

export const Section = styled.section`
  background-color: ${theme.color.orange.light};
  padding: 16px 16px 32px;

  @media screen and (min-width: 1440px) {
    padding: 48px 0;
  }
`;

export const Cards = styled.div`
  display: grid;
  gap: 16px;
  justify-content: center;

  /* Tablet */
  @media screen and (min-width: 832px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Desktop */
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    width: 1170px;
    margin: auto;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;
`;

export const Actions = styled.div`
  a {
    padding-left: 0;
  }
`;
