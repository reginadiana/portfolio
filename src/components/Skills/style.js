import styled from "styled-components";
import { theme } from "@theme";

export const Section = styled.section`
  padding: 16px 16px 32px;
  background-color: ${theme.color.gray.light};

  /* Tablet */
  @media screen and (min-width: 832px) {
    padding: 24px 32px 32px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;  
  align-items: center;
  margin: auto;
  gap: 20px;
  max-width: 1500px;

  /* Tablet */
  @media screen and (min-width: 832px) {
    justify-content: center;
  }
`;

export const Icon = styled.span`
  color: ${theme.color.white};
  font-size: 2rem;
  margin-right: 8px;
`;

export const Card = styled.div`
  display: flex;
  background-color: ${theme.color.orange.light};
  padding: 0 16px 0 8px;
  border-radius: 10px;

  &:hover {
    transform: translateY(-3%);
    transition: 0.5s;
  }
`;

export const Title = styled.h3`
  color: ${theme.color.white};
  font-size: 14px;
  line-height: 1.5;
  font-weight: 700;
`;