import styled from "styled-components";

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
  color: white;

  :nth-child(4n + 1) {
    margin-left: 0;
  }
`;
