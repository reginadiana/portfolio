import React from 'react';
import { Main } from "./style"
import './App.css'
//import Header from "./components/header/index";
//import Introduction from "./components/introduction/index";
import Skills from "./components/skills/index";
import Education from "./components/education/index";
//import Bootcamps from "./components/bootcamps/index";
import Portfolio from "./components/portfolio/index";
import Footer from "./components/footer/index"

function App() { 

	return (
		<Main>
			<Portfolio/>
			<Education/>
			<Skills/>
			<Footer/>
		</Main>
	);
}

export default App;

