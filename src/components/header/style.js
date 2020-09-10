import styled from 'styled-components';
import wallpaper from '../../assets/wallpaper.jpg'

const pink = "#f05ce1"
const yellow = "#e9ca3f"

/*Mobile First*/
export const Container = styled.div`
background-image: url(${wallpaper});
background-repeat:no-repeat;
background-size: cover;
text-align: center;
height: 800px;`

export const Menu = styled.div`
padding-top: 30px;
background-color: ${pink};

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
}

@media screen and (max-width: 400px) {
	width: 300px;
}
`

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
	background-color: ${yellow};
	color: #ae282e;
	transition: 0.5s;
}

/*Desktop*/
@media screen and (min-width: 1100px) {
	&:hover {
		background-color: transparent;
		color: ${yellow};
		transition: 0.5s;
	}
}
`
export const Main = styled.div`
width: 350px;
margin: auto;

/*Desktop*/
@media screen and (min-width: 1100px) {
	width: 700px;
	margin-left: 200px;
}

@media screen and (max-width: 400px) {
	width: 270px;
}
`

export const Title = styled.h1`
font-size: 3rem;
letter-spacing: 3px;
font-weight: bold;
color: white;
margin-bottom: 0;
text-align: left;

&:first-letter {
	font-size: 3.5rem;
	color: ${pink};
}

&:nth-child(6)::letter {
	color: white;
}

/*Desktop*/
@media screen and (min-width: 1100px) {
	font-size: 5rem;
	margin-bottom: -60px;

	&:first-letter {
		font-size: 7rem;
		color: ${pink};
	}
}
`

export const Subtitle = styled.h2`
font-size: 2rem;
font-weight: bold;
color: ${pink};
margin-top: 50px;
border: 2px ${pink} dashed; 
padding: 4px;

/*Desktop*/
@media screen and (min-width: 1100px) {
	width: 400px;
}
`