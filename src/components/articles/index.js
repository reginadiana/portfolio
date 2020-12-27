import React from "react";
import WallpaperReadme from "../../assets/readme.jpeg";
import WallpaperMindex from "../../assets/mindfex.jpeg";
import { MINDFLEX, README } from "../../services/links";
import { Img } from "../portfolio/style";

const Articles = () => {
  return (
    <>
      <a href={README}>
        <Img alt="Artigo Readme" src={WallpaperReadme} />
      </a>
      <a href={MINDFLEX}>
        <Img alt="Artigo Mindlex" src={WallpaperMindex} />
      </a>
    </>
  );
};

export default Articles;
