import styled from 'styled-components';

/*Mobile First*/
export const Wrapper = styled.div`
	background-color: #1c1c1c;
	padding: 3%;

	/*Tablet*/
	@media screen and (min-width: 700px) and (max-width: 1000px) {
		padding: 1%;
	}

	/*Desktop*/
	@media screen and (min-width: 1000px) {
		padding-top: 0.9%;
		padding-bottom: 0.5%;
	}

`

export const SubTitle = styled.p`
	color: white;
	text-align: center;
	font-size: 1.1rem;
	font-family: 'Indie Flower', cursive;
`