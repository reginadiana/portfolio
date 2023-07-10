import styled, { css } from "styled-components";
import { theme } from "@theme";

const fixedMenuStyled = css`
  top: -95px; /* Altura do menu */
  transition: transform 0.4s;
  transform: translateY(100%);
  box-shadow: 0px 10px 15px -3px ${theme.opacity.black[8]};
`;

export const Menu = styled.div`
  // padding: calc(95px / 4) 0;
  background-color: ${theme.color.white};
  z-index: 1;
  width: 100%;
  height: 95px;
  position: relative;
  top: 0;
  text-align: center;

  ${fixedMenuStyled};

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    display: flex;
    padding: 0;
    justify-content: center;
  }
`;

export const Logo = styled.button`
  color: ${theme.color.orange.light};
  border: 3px ${theme.color.orange.light} solid;
  padding: 5px;
  width: 60px;
  height: 50px;
  font-size: 1.4rem;
  background-color: ${theme.color.white};
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    margin: auto 100px auto 0;
    outline: none;
  }
`;

export const List = styled.ul`
  padding: 40px 0 20px;
  display: flex;
  background-color: ${theme.color.white};
  z-index: 1;
  margin: 0;

  /*Mobile*/
  @media screen and (max-width: 1101px) {
    flex-direction: column;
    height: calc(100vh - 45px); // Altura do menu
    padding: 20px 0 20px;

    animation-name: openning;
    animation-duration: 1s;

    @keyframes openning {
      from {
        height: 0;
      }
      to {
        height: 100vh;
      }
    }

    &.closed {
      display: none;
    }
  }
`;

const activeStyled = css`
  border-bottom: 3px ${theme.color.orange.light} solid;
  color: ${theme.color.orange.light};

  /* Mobile */
  @media screen and (max-width: 1101px) {
    margin-bottom: 8px;
  }
`;

export const ItemList = styled.a`
  color: ${theme.color.black};
  list-style: none;
  font-size: 1rem;
  padding-bottom: 16px;
  width: 150px;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: ${theme.color.orange.light};
    transition: 0.5s;
  }

  ${({ active }) => active && activeStyled};

  /* Mobile */
  @media screen and (max-width: 1101px) {
    padding-left: 32px;
    text-align: left;
    width: 100%;
  }
`;

export const Main = styled.div`
  padding: 0 16px 2px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: ${`linear-gradient(180deg, ${theme.color.orange.light} 0%, ${theme.color.white} 100%)`};
  height: 100vh;

  /* Desktop */
  @media screen and (min-width: 1100px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  letter-spacing: 3px;
  font-weight: 300;
  font-size: 2rem;

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    font-size: 5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  padding: 4px;

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    font-size: 3rem;
  }
`;

export const Download = styled.a`
  font-size: 1rem;
  padding: 10px 20px;

  margin-top: 80px;
  text-align: center;

  background-color: ${theme.color.orange.light};
  color: ${theme.color.white};

  cursor: pointer;

  &:hover {
    background-color: ${theme.color.blue.dark};
    color: ${theme.color.white};
    transition: 1s;
    padding: 10px 30px;
  }
`;

export const Description = styled.p`
  color: ${theme.color.white};
  line-height: 39px;
  font-size: 2rem;

  span {
    font-weight: 700;
  }
`;