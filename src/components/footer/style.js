import styled from 'styled-components';

/*Mobile First*/
export const Container = styled.div`
	text-align: center;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 90px;
	font-family: "Poppins", sans-serif;
`

export const IconToUp = styled.a`
	font-size: 3rem;
	color: var(--lightBlue);
	position: fixed;
	bottom: 10px;
	right: 20px;

	&:hover {
		color: var(--lightBrow);
		transition: 0.5s;
	}
`

export const Logo = styled.h1`
	color: var(--lightBlue);
	border: 4px var(--lightOrange) solid; 
	padding: 5px;
	width: 60px;
	margin: auto;
	font-weight: bold;
	cursor: pointer;
	font-size: 1.5rem;
	margin-bottom: 40px;
	margin-top: 20px;
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
	color: var(--gray);
	padding: 15px;

	&:hover {
		color: var(--lightOrange);
		transition: 0.5s;
	}
`

export const SubTitle = styled.p`
`