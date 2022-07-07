import styled from "styled-components";
import { theme } from "../../../theme";

export const Description = styled.div`
  text-align: justify;
  line-height: 30px;
`;

export const Tags = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;

export const Tag = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ color }) => color};
  margin: 5px 0 5px 5px;
  padding: 5px;
  border-radius: 2px;
  color: ${theme.color.white};

  :nth-child(4n + 1) {
    margin-left: 0;
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
