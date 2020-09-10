import React from 'react';
import WallpaperAmoPlantas from '../../assets/amo_plantas.png';
import WallpaperEcommerce from '../../assets/ecommerce.png';
import WallpaperCertificates  from '../../assets/certificates_for_everyone.png';
import { CERTIFICATE, AMOPLANTAS, ECOMMERCE } from '../../links'
import { Img } from '../portfolio/style'

const ProjectsFrontend = () => {
  return(
    <>
      <a href={CERTIFICATE}>
        <Img alt="Certificates for Eveyone" src={WallpaperCertificates}/>
      </a>
      <a href={AMOPLANTAS}>
        <Img alt="Amo Plantas" src={WallpaperAmoPlantas}/>
      </a>
      <a href={ECOMMERCE}>
        <Img alt="Ecommerce" src={WallpaperEcommerce}/>
      </a> 
    </>
  );
};

export default ProjectsFrontend