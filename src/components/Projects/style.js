import styled from "styled-components";
import { theme } from "../../theme";

export const Section = styled.section`
  background-color: ${theme.color.orange.light};
  padding: 48px 0;
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
  display: grid;

  @media screen and (max-width: 1001px) {
    row-gap: 16px;
    justify-items: center;
  }

  @media screen and (min-width: 1000px) {
    column-gap: 24px;
    row-gap: 24px;
    margin: auto;
    width: 800px;
    grid-template-columns: repeat(2, 400px);
  }

  @media screen and (min-width: 1500px) {
    width: 1200px;
    grid-template-columns: repeat(3, 400px);
  }

  @media screen and (min-width: 1800px) {
    width: 1600px;
    grid-template-columns: repeat(4, 400px);
  }
`;
