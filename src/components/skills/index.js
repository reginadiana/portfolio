import React from 'react'
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import { Wrapper, ProgressSkills, TitleIntroduction, Lenguage, Message, Img } from "./style"
import SkillsImg from "../../assets/skills.png"

function Skills(props) {

	return (
		<Wrapper style={{ backgroundColor: "#031f2b"}}>
			<Img src={SkillsImg} />
			<div style={{ backgroundColor: "#031f2b"}}>
				<TitleIntroduction>Skills</TitleIntroduction>

				<ProgressSkills>
					<Lenguage>HTML</Lenguage>
					<Progress percent={70} status="active" strokeColor="#308df1" showInfo={false}/>
					<Lenguage>CSS</Lenguage>
					<Progress percent={70} status="active" strokeColor="#308df1" showInfo={false}/>
					<Lenguage>Java Script</Lenguage>
					<Progress percent={50} status="active" strokeColor="#308df1" showInfo={false}/>
					<Lenguage>Python</Lenguage>
					<Progress percent={10} status="active" strokeColor="#308df1" showInfo={false}/>

					<Lenguage>React</Lenguage>
					<Progress percent={80} status="active" strokeColor="#308df1" showInfo={false}/>
					<Lenguage>Ruby e Ruby on Rails</Lenguage>
					<Progress percent={80} status="active" strokeColor="#308df1" showInfo={false}/>
					<Lenguage>Antdesign</Lenguage>
					<Progress percent={60} status="active" strokeColor="#308df1" showInfo={false}/>

					<Lenguage>Git e GitHub</Lenguage>
					<Progress percent={90} status="active" strokeColor="#308df1" showInfo={false}/>
					<Lenguage>Linux</Lenguage>
					<Progress percent={30} status="active" strokeColor="#308df1" showInfo={false}/>
				</ProgressSkills>
				<Message>*Os indicadores sobre skills e idiomas mostram a frequência com que trabalho com essas 
						tecnologias/idiomas e <strong>não servem </strong>como uma métrica de conhecimento
				</Message> 
			</div>
		</Wrapper>
	);
}

export default Skills;
