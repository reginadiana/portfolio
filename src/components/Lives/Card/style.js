import styled from "styled-components";
import { theme } from "../../../theme";

export const Description = styled.div`
  text-align: justify;
  line-height: 30px;
`;

export const Img = styled.img`
  width: 350px;
  height: 200px;
  margin: 20px;
  border-radius: 5px;
  transition: 0.5s ease;
  backface-visibility: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 10px 15px -3px;
  }

  @media screen and (max-width: 400px) {
    width: 250px;
  }
`;
