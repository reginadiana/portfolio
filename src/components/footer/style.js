import styled from 'styled-components';

const gray = "#c1bdbe"
const orange = "#e45447"

/*Mobile First*/
export const Container = styled.div`
	text-align: center;
	padding-left: 20px;
	padding-right: 20px;

	/*Tablet*/
	@media screen and (min-width: 700px) and (max-width: 1000px) {
	}

	/*Desktop*/
	@media screen and (min-width: 1000px) {
	}

`

export const Logo = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
	color: ${orange};
	border: 2px ${orange} dashed; 
	padding: 4px;
	width: 250px;
	margin: auto;
	margin-bottom: 50px;
	margin-top: 50px;
`

export const Title = styled.h2`
	font-weight: bold;
	color: gray;
	font-size: 1.5rem;
`

export const Icons = styled.div`
	display: flex;
	justify-content: center;
`

export const Icon = styled.a`
	font-size: 1.8rem;
	color: ${gray};
	padding: 15px;

	&:hover {
		color: ${orange};
		transition: 0.5s;
	}
`

export const SubTitle = styled.p`
`