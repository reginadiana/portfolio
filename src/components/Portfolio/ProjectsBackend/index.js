import React from "react";
import Card from "../../../common/Card/index";
import WallpaperHeadhunters from "../../../assets/portfolio/backend/headhunter.png";
import WallpaperRentalCars from "../../../assets/portfolio/backend/rental_cars.png";
import { portfolio } from "../../../services/links";

const ProjectsBackend = () => (
  <>
    <Card
      project={portfolio.backend.headhunter}
      src={WallpaperHeadhunters}
      alt="Headhunters"
    />
    <Card
      project={portfolio.backend.rentalCars}
      src={WallpaperRentalCars}
      alt="Rental Cars"
    />
  </>
);

export default ProjectsBackend;
