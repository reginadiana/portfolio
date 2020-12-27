import React from "react";
import WallpaperAmoPlantas from "../../../assets/portfolio/frontend/amo_plantas.png";
import WallpaperEcommerce from "../../../assets/portfolio/frontend/ecommerce.png";
import WallpaperCertificates from "../../../assets/portfolio/frontend/certificates_for_everyone.png";
import { portfolio } from "../../../services/links";
import Card from "../Card/index";

const ProjectsFrontend = () => (
  <>
    <Card
      redirect={portfolio.frontend.certificate}
      src={WallpaperCertificates}
      alt="Certificates for Eveyone"
    />
    <Card
      redirect={portfolio.frontend.amoPlantas}
      src={WallpaperAmoPlantas}
      alt="Amo Plantas"
    />
    <Card
      redirect={portfolio.frontend.ecommerce}
      src={WallpaperEcommerce}
      alt="Ecommerce"
    />
  </>
);

export default ProjectsFrontend;
