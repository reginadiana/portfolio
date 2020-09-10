import styled from 'styled-components';

/*Mobile First*/
export const Container = styled.div`
	text-align: center;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 30px;
	font-family: "Poppins", sans-serif;
`
export const Logo = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
	color: var(--lightOrange);
	border: 2px var(--lightOrange) dashed; 
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
	color: var(--gray);
	padding: 15px;

	&:hover {
		color: var(--lightOrange);
		transition: 0.5s;
	}
`

export const SubTitle = styled.p`
`