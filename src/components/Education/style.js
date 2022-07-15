import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const Section = styled.section`
  padding-top: 32px;
`;

export const Cards = styled.div`
  display: grid;
  justify-content: center;
  margin-bottom: 50px;

  /*Tablet*/
  @media screen and (min-width: 600px) and (max-width: 1200px) {
    padding-left: 10%;
    padding-right: 10%;
  }

  /*Tablet*/
  @media screen and (min-width: 1200px) and (max-width: 1500px) {
    grid-template-columns: repeat(2, 500px);
  }

  /*Desktop*/
  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(3, 500px);
  }
`;

export const Info = styled.div`
  display: grid;

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Location = styled.a`
  font-size: 1rem;
  color: ${theme.color.black};
`;

export const Date = styled.h2`
  background-color: ${theme.color.orange.light};
  width: 150px;
  text-align: center;
  padding: 10px;
  border-radius: 25px;
  color: ${theme.color.white};
  margin-top: 10px;
  font-size: 14px;
  margin-bottom: 20px;

  @media screen and (max-width: 400px) {
    margin: 20px auto 30px;
  }

  @media screen and (min-width: 800px) {
    position: relative;
    height: 45px;
    top: 5px;
    left: 50px;
  }
`;

export const Description = styled.p`
  line-height: 30px;
`;

export const Card = styled.div`
  background-color: ${theme.color.gray.light};
  padding: 40px;
  margin: 15px;
  color: ${theme.color.gray.self};
  border-radius: 7px;
  cursor: pointer;

  ${({ current }) => current && activeCardStyled};

  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;

const activeCardStyled = css`
  background-color: ${theme.color.blue.dark};

  ${Title},
  ${Location},
  ${Description} {
    color: ${theme.color.white};
  }

  ${Description} {
    font-size: 1rem;
  }
`;
