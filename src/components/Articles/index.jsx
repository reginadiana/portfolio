import React from 'react'
import { Button, Typography } from 'antd'

import SectionTitle from '@ui/SectionTitle'
import * as Styled from './style'

const { Title } = Typography

const Articles = () => {
  return (
    <Styled.Section id="articles">
      <SectionTitle title="Artigos" description="Acompanhe o que escrevo" />
      <Styled.Cards>
        <Styled.Cards>
          <Styled.Card>
            <Title level={4} style={{ fontWeight: 500 }}>
              Como escrever um README.md sensacional no Github
            </Title>
            <Styled.Description>
              Depois de desenvolver aquele projeto incrível, ter passado vários
              perrengues com a aplicação e Git, você abriu no Github para a
              comunidade. Mas as suas tarefas não terminaram, está na hora de
              documentar o seu projeto! E nada melhor do que um bom
              README.md...
            </Styled.Description>
            <Button
              as="link"
              target="_blank"
              rel="noreferrer"
              type="primary"
              danger
              href="https://medium.com/@dianareginadr19/como-escrever-um-readme-md-sensacional-no-github-f6929e60eead"
            >
              Artigo Completo
            </Button>
          </Styled.Card>

          <Styled.Card>
            <Title level={4} style={{ fontWeight: 500 }}>
              Salvando arquivos em realtime com devtools na sua máquina
            </Title>
            <Styled.Description>
              É bastante comum no dia a dia de um programador puxar uma tarefa de frontend, 
              ter que desenvolver um layout e... 
            </Styled.Description>
            <Button
              as="link"
              target="_blank"
              rel="noreferrer"
              type="primary"
              danger
              href="https://medium.com/@dianareginadr19/salvando-arquivos-em-realtime-com-devtools-na-sua-m%C3%A1quina-7e99e111c3b4"
            >
              Artigo Completo
            </Button>
          </Styled.Card>
        </Styled.Cards>
      </Styled.Cards>
    </Styled.Section>
  )
}

export default Articles
