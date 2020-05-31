import styled from 'styled-components';

/*Mobile First*/
export const ProgressSkills = styled.div`
	width: 70%;
	margin-left: auto;
	margin-right: auto;
`
export const TitleIntroduction = styled.h1`
	text-align: center;
	color: orange;
	font-weight: bold;
	margin-top: 5%;
	font-size: 1.5rem;
`
export const Lenguage = styled.h3`
	color: orange;
	text-align: left;
	font-weight: bold;
`
export const Img = styled.img`
	width: 100%;
	margin-top: 5%;	
`
export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	padding-bottom: 5%;

	/*Desktop*/
	@media screen and (min-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}
`
export const Message = styled.div`
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 5%;
	color: white;
	text-align: center;

	/*Desktop*/
	@media screen and (min-width: 1000px) {
		width: 80%;
	}
`