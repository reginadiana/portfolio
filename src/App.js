import React from 'react';
import { Main } from "./style"
import './App.css'
import Header from "./components/header/index";
import AboutMe from "./components/about_me/index";
import Skills from "./components/skills/index";
import Education from "./components/education/index";
import Portfolio from "./components/portfolio/index";
import Footer from "./components/footer/index"

function App() { 

	return (
		<Main>
			<Header />
			<AboutMe />
			<Portfolio/>
			<Education/>
			<Skills/>
			<Footer/>
		</Main>
	);
}

export default App;

