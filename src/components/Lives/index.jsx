import React from 'react'
import { Button, Typography } from 'antd'

import SectionTitle from '@ui/SectionTitle'
import * as Styled from './style'

const { Title } = Typography

const Lives = () => {
  return (
    <Styled.Section id="lives">
      <SectionTitle title="Youtube" description="Lives que participei (:" />
      <Styled.Cards>
        <Styled.Card>
          <Title level={4} style={{ fontWeight: 500 }}>
            Como escrever e personalizar um README no Github
          </Title>
          <Styled.Description>
            Participei dessa live para o canal das meninas da WomakersCode em
            2020 junto com a cohost Laís Lima. Falei sobre a importancia do
            README para o portfólio de desenvolvedores no Github, como
            estruturá-lo mostrando tudo na prática e ainda respondendo as
            duvidas no final.
          </Styled.Description>
          <Button
            as="link"
            type="primary"
            target="_blank"
            rel="noreferrer"
            danger
            href="https://www.youtube.com/watch?v=2A_ebBA3jzM"
          >
            Acessar live
          </Button>
        </Styled.Card>

        <Styled.Card>
          <Title level={4} style={{ fontWeight: 500 }}>Apresentação da 5 turma do Treina Dev</Title>
          <Styled.Description>
            Participei dessa live para o canal da Campus Code em 2021 com o
            Gustavo Carvalho, do Portal Solar e João Almeida da Campus Code.
            Juntos, respondemos as duvidas sobre as etapas do treinamento
            treina dev para a turma 5.
          </Styled.Description>
          <Button
            as="link"
            type="primary"
            target="_blank"
            rel="noreferrer"
            danger
            href="https://www.youtube.com/watch?v=7D_zafaq0RA&t=2124s"
          >
            Acessar live
          </Button>
        </Styled.Card>

        <Styled.Card>
          <Title level={4} style={{ fontWeight: 500 }}>
            Apresentação de formatura: React bootcamp WoMakersCode (Dia 2)
          </Title>
          <Styled.Description>
            Participei dessa live aparesentar, junto ao time, o projeto final do
            Bootcamp de React feito com as mulheres da WoMakersCode
          </Styled.Description>
          <Button
            as="link"
            type="primary"
            danger
            href="https://www.youtube.com/watch?v=K0mvk8zctoM"
          >
            Acessar live
          </Button>
        </Styled.Card>
      </Styled.Cards>
    </Styled.Section>
  )
}

export default Lives
