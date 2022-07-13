import styled from "styled-components";
import { theme } from "../../theme";

export const Footer = styled.footer`
  text-align: center;
  padding: 40px;
`;

export const IconToUp = styled.a`
  font-size: 3rem;
  color: ${theme.color.blue.light};
  position: fixed;
  bottom: 10px;
  right: 20px;

  &:hover {
    color: ${theme.color.brown.light};
    transition: 0.5s;
  }
`;

export const Logo = styled.h1`
  color: ${theme.color.orange.light};
  border: 3px ${theme.color.orange.light} solid;
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
  color: ${theme.color.gray.regular};
  padding: 15px;

  &:hover {
    color: ${theme.color.orange.light};
    transition: 0.5s;
  }
`;
