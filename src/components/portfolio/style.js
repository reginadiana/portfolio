import styled from 'styled-components';

/*Mobile First*/
export const Wrapper = styled.div`
	background-color: white;
	text-align: center;
`
export const AllCards = styled.div`
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

export const Img = styled.img`
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 5%;
	width: 350px;
`

export const TitleIntroduction = styled.h2`
	color: gray;
	font-weight: bold;
	background-color: white;
	padding: 3%;
	text-align: center;
	display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`