import React from "react";
import Card from "../Card/index";
import WallpaperReadme from "../../../assets/portfolio/lives/readme.jpeg";
import { README } from "../../../services/links";

const Lives = () => (
  <Card redirect={README} src={WallpaperReadme} alt="Live sobre Readme" />
);

export default Lives;
