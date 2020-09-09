import styled from 'styled-components';
import { lightGray } from '../../style';

/*Mobile First*/
export const Container = styled.div`
	background-color: ${lightGray};
	margin-bottom: 80px;
`
export const Cards = styled.div`
	text-align: center;

	/*Desktop*/
	@media screen and (min-width: 1500px){
		width: 70%;
		margin: auto;
	}
`

export const Card = styled.img`
	width: 350px;
	margin: 20px;
	border-radius: 5px;

	@media screen and (max-width: 400px){
		width: 250px;
	}
`