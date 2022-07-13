import React from "react";
import TitleSection from "../TitleSection/index";
import WallpaperAmoPlantas from "../../assets/portfolio/frontend/amo_plantas.png";
import WallpaperEcommerce from "../../assets/portfolio/frontend/ecommerce.png";
import WallpaperCertificates from "../../assets/portfolio/frontend/certificates_for_everyone.png";
import WallpaperHeadhunters from "../../assets/portfolio/backend/headhunter.png";
import WallpaperRentalCars from "../../assets/portfolio/backend/rental_cars.png";
import { portfolio } from "../../services/links";
import * as Styled from "./style";
import Card from "./Card/index";

const Projects = () => {
  return (
    <Styled.Section id="projects">
      {/* <TitleSection
        title="Projetos"
        description="Conheça meus projetos no Github e em produção"
      /> */}

      <Styled.Container>
        <Styled.Title>Projetos</Styled.Title>
        <Styled.Paragraphy>
          Conheça meus projetos no Github e em produção
        </Styled.Paragraphy>
        <Styled.Line />
      </Styled.Container>

      <Styled.Cards>
        <Card
          project={portfolio.frontend.certificate}
          src={WallpaperCertificates}
          alt="Certificates for Eveyone"
        />
        <Card
          project={portfolio.frontend.amoPlantas}
          src={WallpaperAmoPlantas}
          alt="Amo Plantas"
        />
        <Card
          project={portfolio.frontend.ecommerce}
          src={WallpaperEcommerce}
          alt="Ecommerce"
        />

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
      </Styled.Cards>
    </Styled.Section>
  );
};

export default Projects;
