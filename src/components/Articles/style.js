import styled from "styled-components";
import { theme } from "@theme";

export const Section = styled.section`
  background-color: ${theme.color.gray.light};
  padding: 16px 16px 32px;

  @media screen and (min-width: 1440px) {
    padding: 48px 0;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 130px;
  background-color: transparent;
  border-color: transparent;
  color: ${({ active }) => active && theme.color.orange.light};
  cursor: pointer;
  margin: 0 15px 40px;
  border-radius: 20px;
  outline: none;

  &:hover {
    background-color: ${theme.color.orange.light};
    color: ${theme.color.white};
    transition: 1s;
  }

  @media screen and (max-width: 600px) {
    width: 130px;
    margin: 5px;
  }
`;

export const Cards = styled.div`
  /* Desktop */
  @media screen and (min-width: 1440px) {
    width: 1170px;
    margin: auto;
  }
`;
