import styled from "styled-components";
import { theme } from "../../theme";

export const Section = styled.section`
  background-color: ${theme.color.orange.light};
  text-align: center;
  padding: 60px 0;
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  color: ${theme.color.white};

  svg {
    margin-left: 16px;
  }
`;

export const Email = styled.a`
  color: ${theme.color.white};
`;
