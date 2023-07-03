import React from 'react'
import { Button } from 'antd'

import TitleSection from '../TitleSection/index'
import * as Styled from './style'

const Articles = () => {
  return (
    <Styled.Section id="articles">
      <TitleSection title="Artigos" description="Acompanhe o que escrevo" />
      <Styled.Cards>
        <Styled.Cards>
          <Styled.Container>
            <Styled.Title>
              Como escrever um README.md sensacional no Github
            </Styled.Title>
            <Styled.Description>
              Depois de desenvolver aquele projeto incrível, ter passado vários
              perrengues com a aplicação e Git, você abriu no Github para a
              comunidade. Mas as suas tarefas não terminaram, está na hora de
              documentar o seu projeto! E nada melhor do que um bom
              README.md...
            </Styled.Description>
            <Button
              as="link"
              type="primary"
              danger
              href="https://medium.com/@dianareginadr19/como-escrever-um-readme-md-sensacional-no-github-f6929e60eead"
            >
              Artigo Completo
            </Button>
          </Styled.Container>
        </Styled.Cards>
      </Styled.Cards>
    </Styled.Section>
  )
}

export default Articles
