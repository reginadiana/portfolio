import styled from 'styled-components';

export const Container = styled.div`
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