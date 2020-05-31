import styled from 'styled-components';

export const Paragraphy = styled.p`
	text-align:justify;
	background-color: white;
	margin-left: auto;
	margin-right: auto;
	width: 80%;
	font-size: 1rem;
	font-family: Lato;
	color: gray;
`
export const TitleIntroduction = styled.h2`
	color: violet;
	font-weight: bold;
	padding: 3%;
	text-align: center;
    font-size: 1.5em;
`

export const Wrapper = styled.div`
	background-color: white;
	height: 600px;
	padding-top: 10%;

	display: grid;
	grid-template-columns: repeat(1, 1fr);

	/*Desktop*/
	@media screen and (min-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}
`

export const Img = styled.img`
	width: 70%;	
	margin-left: auto;
	margin-right: auto;
`
