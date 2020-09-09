import React from 'react'
import 'antd/dist/antd.css';
import { Cards, Card, Container } from './style'
import WallpaperCertificates  from '../../assets/certificates_for_everyone.png'
import WallpaperHeadhunters  from '../../assets/headhunter.png'
import WallpaperRentalCars from '../../assets/rental_cars.png'
import WallpaperAmoPlantas from '../../assets/amo_plantas.png'
import WallpaperEcommerce from '../../assets/ecommerce.png'
import TitleSection from '../title_section/index';

import { CERTIFICATE, HEADHUNTERS, RENTALCARS, AMOPLANTAS, ECOMMERCE } from '../../links'

function Portfolio(props) {

	return (
		<Container>
			<TitleSection 
				title="Meus Projetos"
				description="Conheça o meu trabalho"
			/>

			<Cards>
				<a href={CERTIFICATE}>
					<Card alt="Certificates for Eveyone" src={WallpaperCertificates}/>
				</a>
				<a href={HEADHUNTERS}>
					<Card alt="Headhunters" src={WallpaperHeadhunters}/>
				</a>
				<a href={RENTALCARS}>
					<Card alt="Rental Cars" src={WallpaperRentalCars}/>
				</a>
				<a href={AMOPLANTAS}>
					<Card alt="Amo Plantas" src={WallpaperAmoPlantas}/>
				</a>
				<a href={ECOMMERCE}>
					<Card alt="Ecommerce" src={WallpaperEcommerce}/>
				</a>
			</Cards>
		</Container>
	);
}

export default Portfolio;
