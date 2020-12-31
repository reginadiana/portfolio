import styled from "styled-components";
import { themes } from "../../themes";

const { lightBlue, lightBrow, lightOrange, gray } = themes.colors;

export const Container = styled.div`
  text-align: center;
  padding: 20px 20px;
`;

export const IconToUp = styled.a`
  font-size: 3rem;
  color: ${lightBlue};
  position: fixed;
  bottom: 10px;
  right: 20px;

  &:hover {
    color: ${lightBrow};
    transition: 0.5s;
  }
`;

export const Logo = styled.h1`
  color: ${lightBlue};
  border: 3px ${lightOrange} solid;
  padding: 5px;
  width: 60px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0 auto 40px;
`;

export const Title = styled.h2`
  font-weight: bold;
  color: gray;
  font-size: 1.5rem;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
`;

export const Icon = styled.a`
  font-size: 1.8rem;
  color: ${gray};
  padding: 15px;

  &:hover {
    color: ${lightOrange};
    transition: 0.5s;
  }
`;
