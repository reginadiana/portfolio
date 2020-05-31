import styled from 'styled-components';

/*Mobile First*/
export const ProgressSkills = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-left: auto;
	margin-right: auto;

	/*Tablet*/
	@media screen and (min-width: 700px) and (max-width: 900px) {
		grid-template-columns: repeat(3, 1fr);
	}

	/*Desktop*/
	@media screen and (min-width: 900px) {
		grid-template-columns: repeat(4, 1fr);
	}
`
export const Lenguage = styled.h3`
	color: gray;
	text-align: center;
	font-size: 1.5rem;
`
export const Wrapper = styled.div`
	padding-bottom: 10%;
	padding-top: 2.5%;
`