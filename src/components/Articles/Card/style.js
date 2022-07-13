import styled from "styled-components";
import { theme } from "../../../theme";

export const Container = styled.div`
  background-color: ${theme.color.gray.light};
  border-radius: 4px;
  padding: 16px;
  width: 90%;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (min-width: 1500px) {
    margin-bottom: 0;
    margin-right: 24px;
    width: 500px;
  }
`;

export const Title = styled.h2`
  color: ${theme.color.black};
  line-height: 27px;
  font-size: 18px;
`;

export const Description = styled.div`
  color: ${theme.color.black};
  text-align: justify;
  margin-bottom: 32px;
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
    width: 300px;
    height: 170px;
  }
`;
