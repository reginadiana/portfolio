import styled from 'styled-components';

/*Mobile First*/

export const Container = styled.div`
	padding-top: 5%;
	padding-bottom: 5%;
	background-color: var(--lightGray);
`

export const Cards = styled.div`
  display: grid;
	width: 90%;
	margin: auto;
	text-align: center;
	color: white;

	/*Tablet*/
	@media screen and (max-width: 1100px) and (min-width: 750px) {
		grid-template-columns: repeat(2, 290px);
		gap: 2em;
		justify-content: center;
		text-align: left;
	}

	/*Desktop*/
	@media screen and (min-width: 1100px) {
		grid-template-columns: repeat(4, 220px);
		gap: 2em;
		justify-content: center;
		text-align: left;
	}
`

export const Icon = styled.span`
	font-size: 3rem;
`

export const Card = styled.div`
	background-color: ${props => props.color};
	padding: 30px;
	margin-bottom: 20px;
	border-radius: 5px; 

	&:hover {
		transform: translateY(-3%);
		transition: 0.5s;
	}
`

export const Lenguage = styled.h3`
	color: white;
	font-size: 21px;
	line-height: 27px;
	font-weight: 700;
	margin-top: 20px;
	margin-bottom: 20px;
`

export const Description = styled.p`
	font-size: 1rem;
`