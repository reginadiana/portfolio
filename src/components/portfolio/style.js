import styled from 'styled-components';

/*Mobile First*/
export const Container = styled.div`
	background-color: var(--lightGray);
	margin-bottom: 80px;
	padding-bottom: 80px;
`

export const Options = styled.div`
	display: grid;

	/*Desktop*/
	@media screen and (min-width: 800px) {
		grid-template-columns: repeat(4, 150px);
		justify-content: center;
		text-align: left;
	}
`

export const Button = styled.button`
	width: 130px;
	text-align: center;
	margin: auto;
	background-color: ${props => props.color};
	border-color: transparent;
	color: white;
	cursor: pointer;
	margin-bottom: 15px;
	border-radius: 20px;
`

export const Cards = styled.div`
	text-align: center;

	/*Desktop*/
	@media screen and (min-width: 1500px){
		width: 70%;
		margin: auto;
	}
`

export const Img = styled.img`
	width: 350px;
	margin: 20px;
	border-radius: 5px;
	opacity: 0.4;
	transition: .5s ease;
  backface-visibility: hidden;

	&:hover {
		opacity: 1;
	}

	@media screen and (max-width: 400px){
		width: 250px;
	}
`
