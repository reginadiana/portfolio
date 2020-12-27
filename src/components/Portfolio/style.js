import styled from "styled-components";
import { themes } from "../../themes";

const { lightGray, lightOrange, lightBlue } = themes.colors;

export const Container = styled.div`
  background-color: ${lightGray};
  margin-bottom: 80px;
  padding-bottom: 80px;
  padding-top: 100px;
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 130px;
  background-color: ${({ active }) => (active ? lightOrange : lightBlue)};
  border-color: transparent;
  color: white;
  cursor: pointer;
  margin: 0 15px 40px;
  border-radius: 20px;
  outline: none;

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
