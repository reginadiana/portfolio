import styled from "styled-components";

export const Description = styled.div`
  text-align: justify;
  line-height: 30px;
`;

export const Img = styled.img`
  width: 350px;
  margin: 20px;
  border-radius: 5px;
  opacity: 0.4;
  transition: 0.5s ease;
  backface-visibility: hidden;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 400px) {
    width: 250px;
  }
`;
