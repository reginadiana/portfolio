import styled from "styled-components";
import { themes } from "../../themes";

const { lightGray, lightOrange } = themes.colors;

export const Container = styled.div`
  background-color: ${lightGray};
  margin-bottom: 80px;
  padding-bottom: 80px;
  padding-top: 100px;
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
  color: ${({ active }) => active && lightOrange};
  cursor: pointer;
  margin: 0 15px 40px;
  border-radius: 20px;
  outline: none;

  &:hover {
    background-color: ${lightOrange};
    color: white;
    transition: 1s;
  }

  @media screen and (max-width: 600px) {
    width: 130px;
    margin: 5px;
  }
`;

export const Cards = styled.div`
  text-align: center;

  /*Desktop*/
  @media screen and (min-width: 1500px) {
    width: 70%;
    text-align: left;
    margin: auto;
  }
`;

export const Img = styled.img`
  width: 350px;
  margin: 20px;
  border-radius: 5px;
  opacity: 1;
  transition: 0.5s ease;
  backface-visibility: hidden;
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }

  @media screen and (max-width: 400px) {
    width: 250px;
  }
`;
