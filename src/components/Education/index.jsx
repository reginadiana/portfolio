import React from 'react'
import Title from '@ui/Title'
import * as Styled from './style'

const Education = () => {
  return (
    <Styled.Section id="education">
      <Title
        title="Formação e Bootcamps"
        description="Sabia onde estudei e os bootcamps que participei"
      />
      <Styled.Cards>
        <Styled.Card
          current={false}
          href='http://fatecsantoandre.edu.br/'
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Styled.Title>Tecnologia em Mecatrônica Industrial</Styled.Title>
            <Styled.Subtitle>FATEC Santo André</Styled.Subtitle>
            <p>2017 | 2019</p>
          </div>
          <Styled.Description>
            Tecnologia em Mecatrônica Industrial com foco em robótica,
            eletronica, linguagem de programação C, automação e mecânica.
          </Styled.Description>
        </Styled.Card>

        <Styled.Card
          current={false}
          href='http://fatecsantoandre.edu.br/'
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Styled.Title>Monitorias de linguagem C</Styled.Title>
            <Styled.Subtitle>FATEC Santo André</Styled.Subtitle>
            <p>2019</p>
          </div>
          <Styled.Description>
            Atuei como monitora na disciplina Programação de Programadores I e
            II com foco em lógica de programação e algoritmos e linguagem C e
            Python.
          </Styled.Description>
        </Styled.Card>

        <Styled.Card
          current={false}
          href='https://womakerscode.org/'
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Styled.Title>Bootcamp de React</Styled.Title>
            <Styled.Subtitle>WoMakersCode</Styled.Subtitle>
            <p>Abril | 2020</p>
          </div>
          <Styled.Description>
            Treinamento com foco no desenvolvimento e aprendizado da biblioteca
            React.
          </Styled.Description>
        </Styled.Card>

        <Styled.Card
          current={false}
          href='https://www.treinadev.com.br/'
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Styled.Title>Treina Dev</Styled.Title>
            <Styled.Subtitle>Campus Code</Styled.Subtitle>
            <p>Fevereiro/Julho | 2020</p>
          </div>
          <Styled.Description>
            Treinamento com foco no desenvolvimento de aplicações Ruby e Ruby on
            Rails em time, utilizando de metodologias ágeis e boas práticas como
            pair programming, code review e cerimonias (dailys e plannings).
          </Styled.Description>
        </Styled.Card>

        <Styled.Card
          current
          href='https://www.rebase.com.br/#/'
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Styled.Title>Desenvolvedora de Software</Styled.Title>
            <Styled.Subtitle>Rebase</Styled.Subtitle>
            <p>2020 | o momento</p>
          </div>
          <Styled.Description>
            Atuo como desenvolvedora de software na criação e manutenção de
            aplicações frontend e backend com Typescript, Elixir, Rails, React,
            entre outros.
          </Styled.Description>
        </Styled.Card>

        <Styled.Card
          current
          href= 'https://girlsincloud.datarain.com.br/'
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Styled.Title>Formação em Cloud Computing</Styled.Title>
            <Styled.Subtitle>
              GirlsInCloud - dataRain - WoMakersCode
            </Styled.Subtitle>
            <p>o momento</p>
          </div>
          <Styled.Description>
            Formação com foco em computação em nuvem para uma turma de 200
            alunas feita por instrutores da consultoria dataRain com apoio da
            AWS e comunidade WoMakersCode.
          </Styled.Description>
        </Styled.Card>
      </Styled.Cards>
    </Styled.Section>
  )
}

export default Education
