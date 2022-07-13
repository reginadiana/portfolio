import styled, { css } from "styled-components";
import { theme } from "../../theme";

const fixedMenuStyled = css`
  position: fixed;
  top: -95px; /* Altura do menu */
  transition: transform 0.4s;
  transform: translateY(100%);
  box-shadow: 0px 10px 15px -3px ${theme.opacity.black[8]};
`;

export const Menu = styled.div`
  padding: calc(95px / 4) 0;
  background-color: white;
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

  li {
    list-style: none;
  }

  /*Mobile*/
  @media screen and (max-width: 1101px) {
    flex-direction: column;
    height: 100vh;

    ${({ openMenu }) => {
      if (openMenu) return;
      return {
        display: "none",
      };
    }}
  }

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    padding: 30px 0 5px;
  }
`;

const activeStyled = css`
  border-bottom: 3px ${theme.color.orange.light} solid;
  color: ${theme.color.orange.light};
`;

export const ItemList = styled.a`
  color: black;
  list-style: none;
  font-size: 1rem;
  padding-bottom: 8px;
  width: 150px;
  margin-bottom: 10px;
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
  padding: 95px 16px 2px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: ${`linear-gradient(180deg, ${theme.color.orange.light} 0%, #fff 100%)`};
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

  &:nth-child(6)::letter {
    color: ${theme.color.white};
  }

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

export const Link = styled.a`
  background-color: ${theme.color.orange.light};
  color: ${theme.color.white};
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 20px;
  // border-radius: 50px;

  &:hover {
    background-color: ${theme.color.blue.dark};
    color: ${theme.color.white};
    transition: 1s;
    padding: 10px 30px;
  }
`;

export const Download = styled.div`
  margin-top: 80px;
  text-align: center;
`;

export const Hello = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0;
  color: ${theme.color.white};
`;

export const Description = styled.p`
  color: ${theme.color.white};
  line-height: 39px;
  font-size: 2rem;

  span {
    // color: #000;
    font-weight: 700;
  }
`;

export const Diana = styled.h2`
  color: ${theme.color.orange.light};
  font-size: 2.5rem;
  font-weight: 700;
`;
