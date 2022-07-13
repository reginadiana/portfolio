import styled from "styled-components";
import { theme } from "../../theme";

export const Section = styled.section`
  background-color: ${theme.color.orange.light};
  text-align: center;
  padding: 48px 0;
`;

export const Title = styled.h1`
  color: ${theme.color.white};

  svg {
    margin-left: 8px;
  }
`;

export const Email = styled.a`
  &,
  :hover {
    color: ${theme.color.white};
  }
`;
