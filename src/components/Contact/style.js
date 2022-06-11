import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  background-color: ${theme.color.orange.light};
  text-align: center;
  padding: 80px 0;
  margin-bottom: 20px;

  h1,
  h3 {
    color: ${theme.color.white};
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;
`;
