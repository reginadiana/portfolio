import styled from "styled-components";
import { theme } from "../../theme";

export const Section = styled.section`
  background-color: ${theme.color.gray.light};
  margin-bottom: 80px;
  padding-bottom: 80px;
  padding-top: calc(95px + 32px);
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
  max-width: 1500px;
  margin: auto;
  text-align: center;
`;
