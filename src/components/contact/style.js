import styled from 'styled-components';

/*Mobile First*/
export const Wrapper = styled.div`
	background-color: black;
	padding-top: 10%;
	padding-bottom: 10%;

	/*Desktop*/
	@media screen and (min-width: 1000px) {
		padding-top: 5%;
		padding-bottom: 5%;
	}
`

export const Title = styled.h1`
	text-align: center;
	color: black;
	font-size: 1.5rem;
	background-color: violet;
	padding: 1%;
	width: 70%;
	margin-left: auto;
	margin-right: auto;

	/*Desktop*/
	@media screen and (min-width: 800px) {
		width: 30%;
		padding: 0.7%;
		margin-left: 10%;
	}
`

export const SubTitle = styled.p`
	color: white;
	text-align: center;
	font-size: 1rem;

	/*Desktop*/
	@media screen and (min-width: 800px) {
		margin-left: 10%;
		text-align: left;
	}
`