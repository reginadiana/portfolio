import styled from "styled-components";
import { theme } from "../../../theme";

export const Container = styled.div`
  background-color: ${theme.color.gray.light};
  border-radius: 4px;
  padding: 16px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: ${theme.color.black};
  line-height: 27px;
  font-size: 18px;
`;

export const Description = styled.div`
  color: ${theme.color.black};
  text-align: justify;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;
`;

export const Tag = styled.p`
  text-align: center;
  background-color: ${theme.color.pink.light};
  margin: 0 8px 8px 0;
  padding: 5px;
  border-radius: 2px;
  color: ${theme.color.black};

  :nth-child(4n + 1) {
    margin-left: 0;
  }
`;

export const Actions = styled.div`
  button {
    margin-right: 8px;
  }
`;
