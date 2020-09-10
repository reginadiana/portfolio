import React from 'react';
import { Img } from '../portfolio/style'
import WallpaperHeadhunters  from '../../assets/headhunter.png'
import WallpaperRentalCars from '../../assets/rental_cars.png'
import { HEADHUNTERS, RENTALCARS } from '../../links'

const ProjectsBackend = () => {
  return(
    <>
      <a href={HEADHUNTERS}>
        <Img alt="Headhunters" src={WallpaperHeadhunters}/>
      </a>
      <a href={RENTALCARS}>
        <Img alt="Rental Cars" src={WallpaperRentalCars}/>
      </a>
    </>
  );
};

export default ProjectsBackend;