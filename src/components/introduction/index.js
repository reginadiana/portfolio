import React from 'react'
//import { Card } from 'antd';
//import 'antd/dist/antd.css';
import { Wrapper, TitleIntroduction, Paragraphy, Img } from "./style"
import  AboutMeImg from '../../assets/sobre_mim.png'

function Introduction(props) {

	return (
		<Wrapper>

			<Img src={AboutMeImg} />

			<div>
			    <TitleIntroduction>Sobre mim</TitleIntroduction>
			    <Paragraphy>
			    	Sou formada em <strong>Mecatrônica Industrial</strong> pela FATEC Santo André e Técnico em Eletrônica pela ETEC Júlio de Mesquita. 
			    	Participei do <strong>Bootcamp de React da WoMakersCode</strong> e do <strong>Treina Dev da Campus Code</strong>.
			    </Paragraphy>
			    <Paragraphy>
			    	Desenvolvo meus projetos com <strong>React e Ruby on Rails</strong>,
			    	buscando ao máximo utilizar as <strong>boas práticas de programação</strong>, ter <strong>boas ideias</strong> e <strong>contribuir com a comunidade.</strong> 
			    </Paragraphy>
			</div>
		</Wrapper>
	);
}

export default Introduction;
