import styled from 'styled-components';

/*Mobile First*/
export const IconsProfiles = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);

	/*Tablet*/
	@media screen and (min-width: 700px) and (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}

	/*Desktop*/
	@media screen and (min-width: 1000px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

export const Wrapper = styled.div`
	background-color: black;	
`

export const Paragraphy = styled.h3`
	text-align: center;
	font-family: Lato;
	color: white;
	font-size: 1rem;
	width: 60%;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 10%;
`
export const Ancora = styled.a`
	color: gray;
	text-align: center;
`

export const Title = styled.h3`
	font-weight: bold;
	color: violet;
	width: 100%;
	margin-top: 5%;
	text-align: center;
`

export const TitleIntroduction = styled.h3`
	color: white;
	text-align: center;
	padding: 3%;
	font-size: 1.5rem;
`