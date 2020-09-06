import styled from 'styled-components';

/*Mobile First*/
export const Container = styled.div`
background-image: linear-gradient(to right, #fd548a , black);
text-align: center;
height: 600px;`

export const Menu = styled.div`
padding-top: 30px;

/*Desktop*/
@media screen and (min-width: 1100px) {
	display: flex;
	padding: 0;
	justify-content: space-around;
}
`
export const Logo = styled.h1`
color: white;
width: 400px;
margin: auto;
font-weight: bold;
cursor: pointer;
font-size: 1.1rem;

/*Desktop*/
@media screen and (min-width: 1100px) {
	margin: 0;
	margin-top: auto;
	margin-bottom: auto;
}`

export const List = styled.ul`
padding: 0;
padding-bottom: 20px;
padding-top: 40px;

/*Desktop*/
@media screen and (min-width: 1100px) {
	display: flex;
	padding-bottom: 5px;
	padding-top: 30px;
}
`
export const ItemList = styled.li`
color: #fff;
list-style: none;
font-size: 1rem;
text-align: left;
padding-left: 40px;
width: 150px;
margin-bottom: 10px;
cursor: pointer;

&:hover {
	background-color: orange;
	transition: 0.5s;
}

/*Desktop*/
@media screen and (min-width: 1100px) {
	&:hover {
		background-color: transparent;
	}
}
`
export const Main = styled.div`
width: 350px;
margin: auto;
padding-top: 7%;

/*Desktop*/
@media screen and (min-width: 1100px) {
	width: 700px;
}
`

export const Title = styled.h4`
color: white;
font-size: 2rem;
font-weight: bold;`

export const Button = styled.button`
background-image: linear-gradient(to right, #fd6f24 , orange);
color: white;
border: none;
font-size: 1rem;
line-height: 15px;
letter-spacing: 0.5px;
font-weight: bold;
padding: 20px;
border-radius: 50px;
cursor: pointer;

&:hover {
	box-shadow: 2.5px 2.5px 15px black;
	transition: 1s;
}`