import React from 'react'
import 'antd/dist/antd.css';
import { GithubOutlined, LinkedinOutlined, MediumOutlined, InstagramOutlined, BookOutlined } from '@ant-design/icons'; 
import { Container, Logo, Title, Icons, Icon, SubTitle } from './style'
import { GITHUB, MEDIUM, LINKEDIN, DEV, INSTAGRAM } from '../../links';

function Footer(props) {

	return (
		<Container>
			<Logo>Diana Regina</Logo>
			<Title>Contatos</Title>
			<Icons>
				<Icon href={GITHUB}><GithubOutlined /></Icon>
				<Icon href={LINKEDIN}><LinkedinOutlined /></Icon>
				<Icon href={MEDIUM}><MediumOutlined /></Icon>
				<Icon href={INSTAGRAM}><InstagramOutlined /></Icon>
				<Icon href={DEV}><BookOutlined /></Icon>
			</Icons>
			<SubTitle>Copyright ©2020 All rights reserved | This website was developed by Diana Regina</SubTitle>
		</Container>
	);
}

export default Footer;
