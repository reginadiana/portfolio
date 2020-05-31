import React from 'react'
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import { Wrapper, ProgressSkills, Lenguage } from "./style"

function Lenguages(props) {

	return (
		<Wrapper style={{ backgroundColor: "#f9f9f9"}}>
					<Lenguage>Inglês</Lenguage>
					<ProgressSkills>
							<Progress format={() => <p style={{ fontSize: "18px", margin: "auto", color: "gray", fontWeight: "bold"}}>Escrita</p>} style={{ marginLeft: "20%", padding: "3%"}} type="circle" percent={50} strokeColor="#e22295" showInfo={true}/>
							<Progress format={() => <p style={{ fontSize: "18px", margin: "auto", color: "gray", fontWeight: "bold"}}>Leitura</p>} style={{ marginLeft: "20%", padding: "3%"}} type="circle"  percent={70} strokeColor="#e22295" showInfo={true}/>
							<Progress format={() => <p style={{ fontSize: "15px", margin: "auto", color: "gray", fontWeight: "bold"}}>Compreensão</p>} style={{ marginLeft: "20%", padding: "3%"}} type="circle"  percent={50} strokeColor="#e22295" showInfo={true}/>
							<Progress format={() => <p style={{ fontSize: "15px", margin: "auto", color: "gray", fontWeight: "bold"}}>Comunicação</p>} style={{ marginLeft: "20%", padding: "3%"}} type="circle"  percent={10} strokeColor="#e22295" showInfo={true}/>

					</ProgressSkills>
					<Lenguage>Espanhol</Lenguage>
					<ProgressSkills>
							<Progress format={() => <p style={{ fontSize: "18px", margin: "auto", color: "gray", fontWeight: "bold"}}>Escrita</p>} style={{ marginLeft: "20%", padding: "3%"}} type="circle"  percent={50} strokeColor="orange" showInfo={true}/>
							<Progress format={() => <p style={{ fontSize: "18px", margin: "auto", color: "gray", fontWeight: "bold"}}>Leitura</p>} style={{ marginLeft: "20%", padding: "3%"}} type="circle"  percent={90} strokeColor="orange" showInfo={true}/>
							<Progress format={() => <p style={{ fontSize: "15px", margin: "auto", color: "gray", fontWeight: "bold"}}>Compreensão</p>} style={{ marginLeft: "20%", padding: "3%"}} type="circle"  percent={90} strokeColor="orange" showInfo={true}/>
							<Progress format={() => <p style={{ fontSize: "15px", margin: "auto", color: "gray", fontWeight: "bold"}}>Comunicação</p>} style={{ marginLeft: "20%" ,padding: "3%"}} type="circle"  percent={50} strokeColor="orange" showInfo={true}/>

				</ProgressSkills>
		</Wrapper>
	);
}

export default Lenguages;
