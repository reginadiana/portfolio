import React from "react";
import WallpaperReadme from "../../../assets/portfolio/articles/readme.jpeg";
import WallpaperMindex from "../../../assets/portfolio/articles/mindfex.jpeg";
import { portfolio } from "../../../services/links";
import Card from "../Card/index.js";

const Articles = () => (
  <>
    <Card
      project={portfolio.articles.readme}
      src={WallpaperReadme}
      alt="Artigo Readme"
    />
    <Card
      project={portfolio.articles.mindlex}
      src={WallpaperMindex}
      alt="Artigo Mindlex"
    />

    <Card
      project={portfolio.articles.arduino}
      src={WallpaperMindex}
      alt="Artigo Arduino"
    />
  </>
);

export default Articles;
