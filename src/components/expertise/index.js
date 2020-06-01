import React from 'react'
//import { Card } from 'antd';
//import 'antd/dist/antd.css';
import { Title, TitleIntroduction, Content, Paragraphy, Wrapper, AllExpertises } from "./style"
import { GithubOutlined, BuildOutlined, ReadOutlined, PartitionOutlined, CheckCircleOutlined, FundOutlined } from "@ant-design/icons";

function Expertise(props) {

	return (
		<Wrapper>
			<TitleIntroduction>No que acredito</TitleIntroduction>
			
			<AllExpertises>
				<Content>
					<GithubOutlined style={{ color: "white", fontSize: "60px" }}/>
					<Title>GIT E GITHUB</Title>
				
					<Paragraphy>Ferramenta essencial para qualquer programador. 
								Utilizo muito nos meus projetos	individuais e em time. 
					</Paragraphy>
				</Content>

				<Content>
					<ReadOutlined style={{ color: "white",fontSize: "60px" }}/>
					<Title>DOCUMENTAÇÃO</Title>
				
					<Paragraphy>Tenho o costume de documentar
							todos os meus projetos.
					</Paragraphy>
				</Content>

				<Content>
					<PartitionOutlined style={{ color: "white", fontSize: "60px" }}/>
					<Title>BOAS PRÁTICAS</Title>
				
					<Paragraphy>Códigos são mais lidos que do que escritos. Por isso, acredito na importância em manter o 
							código organizado, padronizado e fácil de entender.
					</Paragraphy>
				</Content>

				<Content>
					<CheckCircleOutlined style={{ color: "white",  fontSize: "60px" }}/>
					<Title>TDD</Title> 
				
					<Paragraphy>Fazemos testes o tempo todo, por que não escrever um 
							algoritmo e deixar que a aplicação teste tudo para voce? Não é "perda de tempo", testes 
							trazem segurança e poupam tempo a longo prazo. 
					</Paragraphy>
				</Content>

				<Content>
					<FundOutlined style={{ color: "white", fontSize: "60px" }}/>
					<Title>FOCO</Title>
					<Paragraphy>Com centenas de linguagens, <i>frameworks</i> e libs surgindo todos os dias a vontade de ser 
							o "mago" e estudar tudo é grande. Mas, acredito que para ser excelente no que faz precisamos focar 
							em poucas coisas e aplicar muito.
					</Paragraphy>
				</Content>

				<Content>
					<BuildOutlined style={{ color: "white",  fontSize: "60px" }}/>
					<Title>ORGANIZAÇÃO</Title>
					<Paragraphy>Com organização não andamos, pulamos. Exige muito mais esforço para manter do que começar, 
							mas trás muitos beneficios pra sí e pro time.
					</Paragraphy> 
				</Content>
			</AllExpertises>
		</Wrapper>
	);
}

export default Expertise;
