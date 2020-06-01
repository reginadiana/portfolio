import React from 'react'
import 'antd/dist/antd.css';

/*Style Components*/
import { AllCards, Img, Wrapper, TitleIntroduction } from './style'

import "./style.css"

/*Importando Imagens*/
import WallpaperCertificates  from '../../assets/certificates_for_everyone.png'
import WallpaperHeadhunters  from '../../assets/headhunter.png'
import WallpaperRentalCars from '../../assets/rental_cars.png'
import WallpaperAmoPlantas from '../../assets/amo_plantas.png'
import WallpaperEcommerce from '../../assets/ecommerce.png'

/*Links*/
import { CERTIFICATE, HEADHUNTERS, RENTALCARS, AMOPLANTAS, ECOMMERCE } from '../../links'

function Portfolio(props) {

	return (
		<Wrapper>
			<TitleIntroduction>Portfólio</TitleIntroduction>

			<AllCards>
				<a href={CERTIFICATE}>
					<Img className="imgPortifolio" alt="Certificates for Eveyone" src={WallpaperCertificates}/>
				</a>
				<a href={HEADHUNTERS}>
					<Img className="imgPortifolio" alt="Headhunters" src={WallpaperHeadhunters}/>
				</a>
				<a href={RENTALCARS}>
					<Img className="imgPortifolio" alt="Rental Cars" src={WallpaperRentalCars}/>
				</a>
				<a href={AMOPLANTAS}>
					<Img className="imgPortifolio" alt="Amo Plantas" src={WallpaperAmoPlantas}/>
				</a>
				<a href={ECOMMERCE}>
					<Img className="imgPortifolio" alt="Ecommerce" src={WallpaperEcommerce}/>
				</a>
			</AllCards>
		</Wrapper>
	);
}

export default Portfolio;
