import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 70px 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;

  /*Desktop*/
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(2, 600px);
  }
`;

export const Paragraphy = styled.p`
  margin: 0 auto 50px;
  text-align: justify;
  width: 80%;
  font-size: 1rem;
  line-height: 40px;

  /*Tablet*/
  @media screen and (min-width: 600px) and (max-width: 1200px) {
    width: 60%;
    text-align: left;
  }

  /*Desktop*/
  @media screen and (min-width: 1200px) {
    width: 70%;
    text-align: left;
  }
`;

export const Img = styled.img`
  display: none;
  width: 400px;
  margin: auto;
  margin-bottom: 110px;
  box-shadow: 10px 10px 15px gray;

  /*Desktop*/
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;
