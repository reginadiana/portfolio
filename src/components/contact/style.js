import styled from "styled-components";
import { themes } from "../../themes";

export const Container = styled.div`
  background-color: ${themes.colors.lightOrange};
  text-align: center;
  padding: 80px 0;
  margin-bottom: 20px;

  h1,
  h3 {
    color: white;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 40px;
`;
