import React from "react";
import { Img } from "../../Portfolio/style";

const Card = ({ redirect, src, alt }) => (
  <a href={redirect}>
    <Img alt={alt} src={src} />
  </a>
);

export default Card;
