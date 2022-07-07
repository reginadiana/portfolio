import styled from "styled-components";
import wallpaper from "../../assets/header/wallpaper.jpg";
import { theme } from "../../theme";

export const Container = styled.div`
  background-image: url(${wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  height: 800px;
`;

export const Menu = styled.div`
  padding-top: 30px;
  background-color: transparent;
  /* position: fixed;
  background-color: honeydew;
  width: 100%;
  top: 0;
  z-index: 1; */

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    display: flex;
    padding: 0;
    justify-content: center;
  }
`;

export const Logo = styled.button`
  color: ${theme.color.blue.light};
  border: 3px ${theme.color.orange.light} solid;
  padding: 5px;
  width: 60px;
  height: 50px;
  font-size: 1.4rem;
  background-color: ${theme.color.white};
  margin: auto;
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
  display: grid;

  ${({ openMenu }) => {
    if (openMenu) return;
    return {
      display: "none",
    };
  }}

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    display: flex;
    padding: 30px 0 5px;
  }
`;
export const ItemList = styled.a`
  color: black;
  list-style: none;
  font-size: 1rem;
  padding-bottom: 8px;
  width: 150px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: ${theme.color.orange.light};
    transition: 0.5s;
  }

  &:first-child {
    border-bottom: 3px ${theme.color.orange.light} solid;
  }

  @media screen and (max-width: 1100px) {
    padding-left: 32px;
    text-align: left;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1100px) {
    margin-top: 80px;
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
  color: ${theme.color.orange.light};
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 50px;

  &:hover {
    background-color: ${theme.color.orange.light};
    color: ${theme.color.white};
    transition: 1s;
    padding: 10px 30px;
  }
`;

export const Download = styled.div`
  margin-top: 80px;
`;
