import styled from "styled-components";
import wallpaper from "../../assets/header/wallpaper.jpg";
import { themes } from "../../themes";

const { lightBrown, lightGray, lightOrange, lightBlue } = themes.colors;

export const Container = styled.div`
  background-image: url(${wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  height: 800px;
  /*box-shadow: 10px 10px 25px ${lightBrown};*/
`;

export const Menu = styled.div`
  padding-top: 30px;
  background-color: transparent;
  /* background-color: ${lightGray}; */
  /*color: white;*/

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    display: flex;
    padding: 0;
    justify-content: center;
    /* box-shadow: 10px 10px 25px gray; */
  }
`;
export const Logo = styled.h2`
  color: ${lightBlue};
  border: 3px ${lightOrange} solid;
  padding: 5px;
  width: 60px;
  margin: auto;
  font-weight: bold;
  cursor: pointer;

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    margin: auto 100px auto 0;
  }
`;

export const List = styled.ul`
  padding: 40px 0 20px;
  display: grid;

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
  text-align: left;
  padding-left: 40px;
  padding-bottom: 10px;
  width: 150px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: ${lightOrange};
    transition: 0.5s;
  }

  &:first-child {
    border-bottom: 3px ${lightOrange} solid;
    /* color: ${lightOrange};
    font-weight: bold; */
  }
`;
export const Main = styled.div`
  /* width: 380px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1100px) {
    /* width: 800px; */
    margin-top: 80px;
    /* text-align: left; */
    /* margin-left: 20%; */
  }

  /* @media screen and (max-width: 500px) {
    width: 280px;
  } */
`;

export const Title = styled.h1`
  letter-spacing: 3px;
  font-weight: 300;
  font-size: 2rem;
  /*color: white;*/
  /* text-align: center;
  margin: auto; */

  /* &:first-letter {
    font-size: 2.5rem;
    color: ${lightOrange};
  } */

  &:nth-child(6)::letter {
    color: white;
  }

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    font-size: 5rem;
    /*text-align: left; */

    /* &:first-letter {
      font-size: 3rem;
    } */
  }
`;

export const Subtitle = styled.p`
  /* font-weight: 500; */
  font-size: 1.5rem;
  /*color: white;*/
  /* margin-top: 40px; */
  /* border: 2px white dashed; */
  padding: 4px;
  /* text-align: center; */

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    font-size: 3rem;
  }
`;

export const Link = styled.a`
  /* background-color: ${lightGray}; */
  color: ${lightOrange};
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 50px;

  &:hover {
    background-color: ${lightOrange};
    color: white;
    transition: 1s;
    padding: 10px 30px;
  }
`;

export const Download = styled.div`
  margin-top: 80px;
`;
