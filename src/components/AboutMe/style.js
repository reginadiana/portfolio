import styled from "styled-components";
import { theme } from "../../theme";

export const Section = styled.section`
  padding-top: 32px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;

  /* Desktop */
  @media screen and (min-width: 1200px) {
    padding: 32px 70px 0;
    grid-template-columns: repeat(2, 600px);
  }
`;

export const Paragraphy = styled.p`
  margin: 0 auto 50px;
  width: 80%;
  font-size: 1rem;
  line-height: 40px;

  /* Mobile */
  @media screen and (max-width: 601px) {
    text-align: justify;
  }

  /* Tablet */
  @media screen and (min-width: 600px) and (max-width: 1200px) {
    width: 60%;
  }

  /* Desktop */
  @media screen and (min-width: 1200px) {
    width: 70%;
  }
`;

export const Img = styled.img`
  width: 400px;
  height: 600px;
  margin: auto;
  margin-bottom: 110px;
  box-shadow: 10px 10px 15px ${theme.color.gray.self};

  /* Mobile */
  @media screen and (max-width: 1201px) {
    display: none;
  }
`;
