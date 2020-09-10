import React from 'react'
import { Wrapper, Paragraphy, Img } from "./style"
import TitleSection from '../title_section/index';
import  AboutMeImg from '../../assets/me.jpeg'
import AboutWebsite from '../../assets/about_site.jpeg'

function AboutMe(props) {

	return (
		<Wrapper>
			<Img src={AboutMeImg} />
			<div>
					<TitleSection 
						title="About Me" 
						description="Quem é a Diana?"
					/>
			    <Paragraphy>
						Sou uma mulher <strong>criativa</strong>, <strong>organizada</strong>, e <strong>muito</strong> dedicada. 
						Gosto de ler, dançar, pintar, assistir séries sobre ficção cientifica, crimes e suspense. 
			    </Paragraphy>
			    <Paragraphy>  	
						Já deu para notar que gosto de arte e tudo que é intenso. Mas a calmaria é bem vinda sempre. 
			    </Paragraphy>
					<Paragraphy>
						Se você veio aqui conhecer o meu trabalho, 
						saiba que sou apaixonada pelo que faço e estou sempre tentando fazer melhor, <strong>porque sempre dá.</strong>
					</Paragraphy>
			</div>
			
			<div>
					<TitleSection 
						title="Sobre este site" 
						description="Sempre foi uma evolução"
					/>
			    <Paragraphy>
						Esse site é uma prova disso, ele é a terceira versão do que 
						tenho tentando fazer desde 2019: o meu <strong>portfólio.</strong>
			    </Paragraphy>
			    <Paragraphy>  	
						Entre ajustes no design, responsivo nas tecnologias ele veio da primeira versão com um 
						simples HTML e CSS ao React, levando uma maturidade bem maior que quem está por trás de sua criação.
			    </Paragraphy>
			</div>
			<Img src={AboutWebsite} />
		</Wrapper>
	);
}

export default AboutMe;
