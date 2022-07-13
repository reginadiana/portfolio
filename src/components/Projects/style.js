import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  margin-bottom: 32px;
  padding: 0 16px;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 50px;
  color: ${theme.color.white};

  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

export const Paragraphy = styled.p`
  color: ${theme.color.white};
  text-align: center;
`;

export const Line = styled.h2`
  content: "";
  margin: auto;
  width: 300px;
  height: 2px;
  background: ${theme.color.white};
  position: relative;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    background: ${theme.color.white};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: -5px;
    transform: translateY(-50%);
  }

  /* Mobile */
  @media screen and (max-width: 400px) {
    width: 90%;

    &::after {
      display: none;
    }
  }
`;

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
