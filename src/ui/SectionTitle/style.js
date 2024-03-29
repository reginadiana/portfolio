import styled, { css } from "styled-components";
import { theme } from "@theme";

export const Container = styled.div`
  margin-bottom: 32px;
  padding: 0 16px;

  ${({ invertedTheme }) => (invertedTheme ? invertedStyled : defaultStyled)};
`;

export const Paragraphy = styled.p`
  text-align: center;
  padding-bottom: 24px;
`;

export const Line = styled.h2`
  content: "";
  margin: auto;
  width: 300px;
  height: 2px;
  position: relative;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
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

const defaultStyled = css`
  ${Paragraphy} {
    color: ${theme.color.gray.self};
  }

  ${Line} {
    &,
    ::after {
      background: ${theme.color.orange.light};
    }
  }
`;

const invertedStyled = css`
  ${Paragraphy} {
    color: ${theme.color.white};
  }

  ${Line} {
    &,
    ::after {
      background: ${theme.color.white};
    }
  }
`;
