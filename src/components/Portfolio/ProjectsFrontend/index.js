import React from "react";
import WallpaperAmoPlantas from "../../../assets/portfolio/frontend/amo_plantas.png";
import WallpaperEcommerce from "../../../assets/portfolio/frontend/ecommerce.png";
import WallpaperCertificates from "../../../assets/portfolio/frontend/certificates_for_everyone.png";
import { portfolio } from "../../../services/links";
import Card from "../../../common/Card/index";

const ProjectsFrontend = () => (
  <>
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
  </>
);

export default ProjectsFrontend;
