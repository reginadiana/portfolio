import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  margin-bottom: 32px;
  padding: 0 16px;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 50px;

  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

export const Paragraphy = styled.p`
  color: gray;
  text-align: center;
`;

export const Line = styled.h2`
  content: "";
  margin: auto;
  width: 300px;
  height: 2px;
  background: ${theme.color.orange.light};
  position: relative;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    background: ${theme.color.orange.light};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: -5px;
    transform: translateY(-50%);
  }

  /* Mobile */
  @media screen and (max-width: 400px) {
    width: 90%;

    &::after {
      display: none;
    }
  }
`;
