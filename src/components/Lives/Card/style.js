import styled from "styled-components";
import { theme } from "../../../theme";

export const Container = styled.div`
  background-color: ${theme.color.gray.light};
  border-radius: 4px;
  padding: 16px;
  width: 90%;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (min-width: 1500px) {
    margin-bottom: 0;
    margin-right: 24px;
    width: 500px;
  }
`;

export const Title = styled.h2`
  color: ${theme.color.black};
  line-height: 27px;
  font-size: 18px;
`;

export const Description = styled.div`
  color: ${theme.color.black};
  text-align: justify;
  margin-bottom: 32px;
`;
