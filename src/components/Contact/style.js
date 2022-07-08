import styled from "styled-components";
import { theme } from "../../theme";

export const Section = styled.section`
  background-color: ${theme.color.orange.light};
  text-align: center;
  padding: 60px 0;

  h1,
  a {
    color: ${theme.color.white};
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;

  svg {
    margin-left: 16px;
  }
`;
