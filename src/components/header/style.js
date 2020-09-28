import styled from "styled-components";
import wallpaper from "../../assets/wallpaper.jpg";

//const pink = "#f05ce1"

/*Mobile First*/
export const Container = styled.div`
  background-image: url(${wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  height: 800px;
  box-shadow: 10px 10px 25px var(--lightBrown);
`;

export const Menu = styled.div`
  padding-top: 30px;
  background-color: var(--lightGray);
  color: white;

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    display: flex;
    padding: 0;
    justify-content: center;
    box-shadow: 10px 10px 25px gray;
  }
`;
export const Logo = styled.h1`
  color: var(--lightBlue);
  border: 4px var(--lightOrange) solid;
  padding: 5px;
  width: 60px;
  margin: auto;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.5rem;

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    margin: auto 100px auto 0;
  }
`;

export const List = styled.ul`
  padding: 0;
  padding-bottom: 20px;
  padding-top: 40px;
  display: grid;

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    display: flex;
    padding-bottom: 5px;
    padding-top: 30px;
  }
`;
export const ItemList = styled.a`
  color: black;
  list-style: none;
  font-size: 1rem;
  text-align: left;
  padding-left: 40px;
  width: 150px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: var(--lightOrange);
    transition: 0.5s;
  }

  &:first-child {
    color: var(--lightOrange);
    font-weight: bold;
  }
`;
export const Main = styled.div`
  width: 380px;
  margin: auto;

  @media screen and (min-width: 1100px) {
    width: 800px;
    margin-top: 80px;
    text-align: left;
    margin-left: 20%;
  }

  @media screen and (max-width: 500px) {
    width: 280px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: 3px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: auto;

  &:first-letter {
    font-size: 2.5rem;
    color: var(--lightOrange);
  }

  &:nth-child(6)::letter {
    color: white;
  }

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    font-size: 5rem;
    text-align: left;

    &:first-letter {
      font-size: 6rem;
    }
  }
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-top: 40px;
  border: 2px white dashed;
  padding: 4px;
  text-align: center;

  /*Desktop*/
  @media screen and (min-width: 1100px) {
    width: 400px;
  }
`;

export const Link = styled.a`
  background-color: var(--lightOrange);
  border-color: transparent;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 50px;

  &:hover {
    background-color: var(--lightGray);
    border-color: var(--lightOrange);
    color: var(--lightOrange);
    font-weight: bold;
    transition: 1s;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Download = styled.div`
  margin-top: 100px;
`;
