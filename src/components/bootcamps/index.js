import React from 'react'
import { Timeline  } from 'antd';
import { CheckCircleTwoTone } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { TimelineDiv, Wrapper, TitleIntroduction, Img } from "./style"
import BootcampImg from '../../assets/bootcamps.png'

function Bootcamps(props) {

	return (
		<Wrapper>
			<Img src={BootcampImg} />

			<div>
				<TitleIntroduction>Cursos, Eventos e Bootcamps</TitleIntroduction>
				<TimelineDiv>
					<Timeline mode="left">
				    	<Timeline.Item label="No momento">Treina Dev - Campus Code</Timeline.Item>
				    	<Timeline.Item 
				    		label="Abril/2020"
				    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
				    			Bootcamp React WoMakersCode
				    	</Timeline.Item>
				    	<Timeline.Item 
				    		label="Dezembro/2019"
				    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
				    			Monitoria de Programação
				    	</Timeline.Item>
				    	<Timeline.Item 
				    		label="Outubro/2019"
				    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
				    			Hackathon Unisys Mauá
				    	</Timeline.Item>
				    	<Timeline.Item 
				    		label="Dezembro/2018"
				    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
				    			Estágio de Eletrônica
				    	</Timeline.Item>
				    	<Timeline.Item 
				    		label="Outubro/2018"  
				    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
				    			Hackathon Unisys Senai
				    	</Timeline.Item>
				  	</Timeline>
				</TimelineDiv>
			</div>
		</Wrapper>
	);
}

export default Bootcamps;