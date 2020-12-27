import React from "react";
import Card from "../Card/index";
import WallpaperReadme from "../../../assets/portfolio/lives/readme.jpeg";
import WallpaperTreinaDev from "../../../assets/portfolio/lives/treina.jpeg";
import { portfolio } from "../../../services/links";

const Lives = () => (
  <>
    <Card
      redirect={portfolio.readme}
      src={WallpaperReadme}
      alt="Live sobre Readme"
    />
    <Card
      redirect={portfolio.treinaDev}
      src={WallpaperTreinaDev}
      alt="Live sobre Treina Dev"
    />
  </>
);

export default Lives;
