import React from 'react'
import { Timeline  } from 'antd';
import { CheckCircleTwoTone } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { TimelineDiv } from '../bootcamps/style'
import { TitleIntroduction, Img, Wrapper } from "./style"
import AcademyImg from '../../assets/academy.png'

function Education(props) {

	return (
		<Wrapper>
			<div style={{ paddingTop: "25%"}}>
				<TitleIntroduction>Formação</TitleIntroduction>
				<TimelineDiv>
					<Timeline mode="left">
						<Timeline.Item 
				    		label="Dezembro/2019"
				    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
				    			Técnologo em Mecatrônica Industrial
				    	</Timeline.Item>
				    	<Timeline.Item 
				    		label="Dezembro/2017"
				    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
				    			Técnico em Eletrônica
				    	</Timeline.Item>
				  	</Timeline>
				</TimelineDiv>
			</div>
			<Img src={AcademyImg} />
		</Wrapper>
	);
}

export default Education;
