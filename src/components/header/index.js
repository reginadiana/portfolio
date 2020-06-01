import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './style.css'
import { Title } from "./style"

function Header(props) {
	return (
			<Carousel autoplay>
			    <div>
			    	<Title>Olá, me chamo Diana Regina</Title>
			    </div>
			    <div>
			    	<Title>Sou desenvolvedora Frontend</Title>
			    </div>
			    <div>
			    	<Title>Conheça meu Portfólio </Title>
			    </div>
			</Carousel>
	);
}

export default Header;
