import styled from 'styled-components';

//const black = "#222222"
const lightGray = "#f9f9ff"
//const lightOrange = "#e45447";

/*Mobile First*/

export const Container = styled.div`
	padding-top: 5%;
	padding-bottom: 5%;
	background-color: ${lightGray};
	font-family: "Poppins", sans-serif;
`

export const ContainerTitle = styled.div`
`

export const Title = styled.h1`
	text-align: center;
	font-weight: 700;
	font-size: 1.6rem;
	line-height: 50px;

	/*Desktop*/
	@media screen and (min-width: 800px) {
		font-size: 2rem;
	}

	/*Desktop*/
	@media screen and (max-width: 400px) {
		font-size: 1.2rem;
	}
`

export const Line = styled.h2`
	content: '';
	margin: auto;
	width: 300px;
	height: 2px;
	background: #e45447;

	&::after {
		content: '';
		width: 10px;
		height: 10px;
		background: #e45447;
		border-radius: 7px;
		position: absolute;
		margin-top: -3px;
	}

	/*Desktop*/
	@media screen and (max-width: 400px) {
		width: 290px;

		&::after {
			display: none;
		}
	}
`

export const Text = styled.h4`
	text-align: center;
	margin-top: 40px;
	margin-bottom: 70px;
	font-size: 1rem;
	padding: 10px;
	line-height: 30px;
`

export const Cards = styled.div`
  display: grid;
	width: 90%;
	margin: auto;
	text-align: center;
	color: white;

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