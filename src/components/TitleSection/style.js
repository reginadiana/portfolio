import styled from "styled-components";
import { themes } from "../../themes";

const { lightOrange } = themes.colors;

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 50px;

  /*Desktop*/
  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }

  /*Desktop*/
  @media screen and (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

export const Line = styled.h2`
  content: "";
  margin: auto;
  width: 300px;
  height: 2px;
  background: ${lightOrange};
  margin-bottom: 40px;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    background: ${lightOrange};
    border-radius: 7px;
    position: absolute;
    margin-top: -3px;
  }

  /*Desktop*/
  @media screen and (max-width: 400px) {
    width: 290px;

    &::after {
      display: none;
    }
  }
`;
