import styled from 'styled-components';

/*Mobile First*/
export const TitleIntroduction = styled.h1`
	text-align: center;
	color: violet;
	font-weight: bold;
	margin-top: 5%;
	font-size: 1.5rem;
`

export const Img = styled.img`
	width: 100%;	
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
