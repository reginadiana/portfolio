import React from 'react'
import { Button } from 'antd'

import SectionTitle from '@ui/Title'
import * as Styled from './style'

const Lives = () => {
  return (
    <Styled.Section id="lives">
      <SectionTitle title="Youtube" description="Lives que participei (:" />
      <Styled.Cards>
        <Styled.Card>
          <Styled.Title>
            Como escrever e personalizar um README no Github
          </Styled.Title>
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
          <Styled.Title>Apresentação da 5 turma do Treina Dev</Styled.Title>
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
          <Styled.Title>
            Apresentação de formatura: React bootcamp WoMakersCode (Dia 2)
          </Styled.Title>
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
