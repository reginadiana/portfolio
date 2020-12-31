import React from "react";
import WallpaperReadme from "../../../assets/portfolio/articles/readme.jpeg";
import WallpaperMindex from "../../../assets/portfolio/articles/mindfex.jpeg";
import { portfolio } from "../../../services/links";
import Card from "../Card/index.js";

const Articles = () => (
  <>
    <Card
      redirect={portfolio.articles.readme}
      src={WallpaperReadme}
      alt="Artigo Readme"
    />
    <Card
      redirect={portfolio.articles.mindflex}
      src={WallpaperMindex}
      alt="Artigo Mindlex"
    />

    <Card
      redirect={portfolio.articles.arduino.link}
      src={portfolio.articles.arduino.giff}
      alt="Artigo Arduino"
    />
  </>
);

export default Articles;
