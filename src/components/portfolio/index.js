import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Cards, Container, Options, Button } from './style'

import TitleSection from '../title_section/index';
import ProjectsFrontend from '../projects_frontend/index';
import ProjectsBackend from '../projects_backend/index';
import Articles from '../articles/index';

function Portfolio(props) {
	const active = 'var(--lightOrange)';
	const default_color = 'var(--lightBlue)';

	const [ showOption, setShowOption ] = useState('all');
	const [ colorAll, setColorAll ] = useState(active)
	const [ colorFront, setColorFront ] = useState(default_color)
	const [ colorBack, setColorBack ] = useState(default_color)
	const [ colorArticle, setColorArticle ] = useState(default_color)

	const resetColors = () => {
		setColorFront(default_color)
		setColorBack(default_color)
		setColorArticle(default_color)
		setColorAll(default_color)
	}

	const renderChoice = (choice) => {
		setShowOption(choice)
		resetColors()
		changeColor(choice);
	}

	const changeColor = (choice) => {
		switch (choice) {
			case 'frontend':
				setColorFront(active)
			break;
			case 'backend':
				setColorBack(active)
			break;
			case 'articles':
				setColorArticle(active)
			break;
			default:
				setColorAll(active)
		}
	}

	return (
		<Container id="portfolio">
			<TitleSection 
				title="Meus Projetos"
				description="Conheça o meu trabalho"
			/>
			<Options>
				<Button onClick={() => renderChoice('all')} color={colorAll}>Todos</Button>
				<Button onClick={() => renderChoice('frontend')} color={colorFront}>Frontend</Button>
				<Button onClick={() => renderChoice('backend')} color={colorBack}>Backend</Button>
				<Button onClick={() => renderChoice('articles')} color={colorArticle}>Artigos</Button>
			</Options>
			<Cards>
				{	( showOption === 'frontend' || showOption === 'all') ? <ProjectsFrontend/> : null }
				{	( showOption === 'backend' || showOption === 'all') ? <ProjectsBackend /> : null }
				{	( showOption === 'articles' || showOption === 'all') ? <Articles /> : null }
			</Cards>
		</Container>
	);
}

export default Portfolio;
