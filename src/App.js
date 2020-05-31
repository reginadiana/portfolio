import React from 'react';
import './App.css'
import Header from "./components/header/index";
import Introduction from "./components/introduction/index";
import Expertise from "./components/expertise/index";
import Skills from "./components/skills/index";
import Lenguages from "./components/lenguages/index"
import Education from "./components/education/index";
import Bootcamps from "./components/bootcamps/index";
import Profiles from "./components/profiles/index";
import Portfolio from "./components/portfolio/index";
import Contact from "./components/contact/index";
import Footer from "./components/footer/index"

function App() { 

	return (
		<>
			<Header/>
			<Introduction/>
			<Expertise/>
			<Portfolio/>
			<Education/>
			<Bootcamps/>
			<Skills/>
			<Lenguages/>
			<Profiles/>
			<Contact/>
			<Footer/>
		</>
	);
}

export default App;

