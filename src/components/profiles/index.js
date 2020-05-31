import React from 'react'
import "./style.css"

/*Antd*/
import { GithubOutlined, MediumOutlined, LinkedinOutlined, ForkOutlined,
		 BuildOutlined, SmileOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';

/*Style Components*/
import { IconsProfiles, Wrapper, Paragraphy, Title, TitleIntroduction, Ancora } from './style'

/*Links*/
import { GITHUB, MEDIUM, LINKEDIN, DEV, REVELO, URI } from '../../links'

function Profiles(props) {

	return (
		<Wrapper>
			<TitleIntroduction>Profiles</TitleIntroduction>
			
			<IconsProfiles>
				<Ancora className="ancora" href={GITHUB}>
					<GithubOutlined style={{ fontSize: "40px" }}/>
					<Title>GITHUB</Title>
					<Paragraphy>Confira meus projetos na integra</Paragraphy>
				</Ancora>
				<Ancora className="ancora" href={MEDIUM}>
					<MediumOutlined style={{ fontSize: "40px" }}/>
					<Title>MEDIUM</Title>
					<Paragraphy>Confira meus artigos</Paragraphy>
				</Ancora>
				<Ancora className="ancora" href={LINKEDIN}>
					<LinkedinOutlined style={{ fontSize: "40px" }}/>
					<Title>PERFIL NO LINKEDIN</Title>
					<Paragraphy>Página social</Paragraphy>
				</Ancora>
				<Ancora className="ancora" href={DEV}>
					<ForkOutlined style={{ fontSize: "40px" }}/>
					<Title>DEV</Title>
					<Paragraphy>Aqui você encontrará mais artigos</Paragraphy>
				</Ancora>
				<Ancora className="ancora" href={URI}>
					<BuildOutlined style={{ fontSize: "40px" }}/>
					<Title>URI ONLINE JUDGE</Title>
					<Paragraphy>Desáfios para treinar a lógica</Paragraphy>
				</Ancora>
				<Ancora className="ancora" href={REVELO}>
					<SmileOutlined style={{ fontSize: "40px" }}/>
					<Title>PERFIL NO REVELO</Title>
					<Paragraphy>Página pessoal</Paragraphy>
				</Ancora>
			</IconsProfiles>
		</Wrapper>
	);
}

export default Profiles;