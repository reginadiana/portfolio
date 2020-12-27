import React from "react";
import WallpaperReadme from "../../../assets/portfolio/articles/readme.jpeg";
import WallpaperMindex from "../../../assets/portfolio/articles/mindfex.jpeg";
import { MINDFLEX, README } from "../../../services/links";
import Card from "../Card/index.js";

const Articles = () => (
  <>
    <Card redirect={README} src={WallpaperReadme} alt="Artigo Readme" />
    <Card redirect={MINDFLEX} src={WallpaperMindex} alt="Artigo Mindlex" />
  </>
);

export default Articles;
