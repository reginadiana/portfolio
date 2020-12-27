import React from "react";
import Card from "../Card/index";
import WallpaperHeadhunters from "../../../assets/portfolio/backend/headhunter.png";
import WallpaperRentalCars from "../../../assets/portfolio/backend/rental_cars.png";
import { HEADHUNTERS, RENTALCARS } from "../../../services/links";

const ProjectsBackend = () => (
  <>
    <Card redirect={HEADHUNTERS} src={WallpaperHeadhunters} alt="Headhunters" />
    <Card redirect={RENTALCARS} src={WallpaperRentalCars} alt="Rental Cars" />
  </>
);

export default ProjectsBackend;
