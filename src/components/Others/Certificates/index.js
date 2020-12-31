import React from "react";
import WallpaperCertificate from "../../../assets/portfolio/certificates/certificate.png";
import WallpaperGit from "../../../assets/portfolio/certificates/git.png";
import WallpaperIntroductionGit from "../../../assets/portfolio/certificates/introduction_git.png";
import WallpaperIntroductionGitComands from "../../../assets/portfolio/certificates/introduction_git_comands.png";
import WallpaperLogic from "../../../assets/portfolio/certificates/logic.png";
import WallpaperReact from "../../../assets/portfolio/certificates/react.png";

import { portfolio } from "../../../services/links";
import Card from "../../../common/Card/index";

const Certificates = () => (
  <>
    <Card
      project={portfolio.certificates.introduction_web}
      src={WallpaperCertificate}
      alt="Certificado DIO"
    />
    <Card
      project={portfolio.certificates.introduction_web}
      src={WallpaperGit}
      alt="Certificado DIO"
    />
    <Card
      project={portfolio.certificates.introduction_web}
      src={WallpaperIntroductionGit}
      alt="Certificado DIO"
    />
    <Card
      project={portfolio.certificates.introduction_web}
      src={WallpaperLogic}
      alt="Certificado DIO"
    />
    <Card
      project={portfolio.certificates.introduction_web}
      src={WallpaperIntroductionGitComands}
      alt="Certificado DIO"
    />
    <Card
      project={portfolio.certificates.introduction_web}
      src={WallpaperReact}
      alt="Certificado DIO"
    />
  </>
);

export default Certificates;
