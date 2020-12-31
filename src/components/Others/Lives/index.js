import React from "react";
import Card from "../../../common/Card/index";
import WallpaperReadme from "../../../assets/portfolio/lives/readme.jpeg";
import WallpaperTreinaDev from "../../../assets/portfolio/lives/treina.jpeg";
import { portfolio } from "../../../services/links";

const Lives = () => (
  <>
    <Card
      project={portfolio.lives.readme}
      src={WallpaperReadme}
      alt="Live sobre Readme"
    />
    <Card
      project={portfolio.lives.treinaDev}
      src={WallpaperTreinaDev}
      alt="Live sobre Treina Dev"
    />
  </>
);

export default Lives;
