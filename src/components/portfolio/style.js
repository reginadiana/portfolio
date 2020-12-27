import styled from "styled-components";
import { themes } from "../../themes";

const { lightGray } = themes.colors;

export const Container = styled.div`
  background-color: ${lightGray};
  margin-bottom: 80px;
  padding-bottom: 80px;
  padding-top: 100px;
`;

export const Options = styled.div`
  display: grid;
  margin-top: -50px;

  /*Desktop*/
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(4, 150px);
    justify-content: center;
    text-align: left;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 140px);
    justify-content: center;
    text-align: left;
  }
`;

export const Button = styled.button`
  width: 130px;
  text-align: center;
  margin: auto;
  background-color: ${(props) => props.color};
  border-color: transparent;
  color: white;
  cursor: pointer;
  margin-bottom: 15px;
  border-radius: 20px;

  @media screen and (max-width: 600px) {
    width: 130px;
  }
`;

export const Cards = styled.div`
  text-align: center;

  /*Desktop*/
  @media screen and (min-width: 1500px) {
    width: 70%;
    margin: auto;
  }
`;

export const Img = styled.img`
  width: 350px;
  margin: 20px;
  border-radius: 5px;
  opacity: 0.4;
  transition: 0.5s ease;
  backface-visibility: hidden;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 400px) {
    width: 250px;
  }
`;
