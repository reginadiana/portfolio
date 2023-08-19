import React from 'react'
import { Typography } from 'antd'

import SectionTitle from '@ui/SectionTitle'

import { theme } from '@theme'
import * as Styled from './style'

const { Title, Paragraph } = Typography

const Experience = () => {
  return (
    <Styled.Section id="experience">
      <SectionTitle
        title="Experiências"
        description="Formação, bootcamps, cursos e experiências profissionais"
      />
      <Styled.Cards>
        <Styled.Card
          href="http://fatecsantoandre.edu.br/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Title level={4}>Tecnologia em Mecatrônica Industrial</Title>
            <Title level={5} style={{ fontWeight: 500 }}>
              FATEC Santo André
            </Title>
            <p>2017 | 2019</p>
          </div>
          <Paragraph style={{ lineHeight: '30px' }}>
            Tecnologia em Mecatrônica Industrial com foco em robótica,
            eletronica, linguagem de programação C, automação e mecânica.
          </Paragraph>
        </Styled.Card>

        <Styled.Card
          href="http://fatecsantoandre.edu.br/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Title level={4}>Monitorias de linguagem C</Title>
            <Title level={5} style={{ fontWeight: 500 }}>
              FATEC Santo André
            </Title>
            <p>2019</p>
          </div>
          <Paragraph style={{ lineHeight: '30px' }}>
            Atuei como monitora na disciplina Programação de Programadores I e
            II com foco em lógica de programação e algoritmos e linguagem C e
            Python.
          </Paragraph>
        </Styled.Card>

        <Styled.Card
          href="https://womakerscode.org/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Title level={4}>Bootcamp de React</Title>
            <Title level={5} style={{ fontWeight: 500 }}>
              WoMakersCode
            </Title>
            <p>Janeiro - Abril de 2020</p>
          </div>
          <Paragraph style={{ lineHeight: '30px' }}>
            Treinamento com foco no desenvolvimento e aprendizado da biblioteca
            React.
          </Paragraph>
        </Styled.Card>

        <Styled.Card
          href="https://www.treinadev.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Title level={4}>Treina Dev</Title>
            <Title level={5} style={{ fontWeight: 500 }}>
              Campus Code
            </Title>
            <p>Fevereiro - Julho de 2020</p>
          </div>
          <Paragraph style={{ lineHeight: '30px' }}>
            Treinamento com foco no desenvolvimento de aplicações Ruby e Ruby on
            Rails em time, utilizando de metodologias ágeis e boas práticas como
            pair programming, code review e cerimonias (dailys e plannings).
          </Paragraph>
        </Styled.Card>

        <Styled.Card
          href="https://girlsincloud.datarain.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Title level={4}>
              Formação em Cloud Computing
            </Title>
            <Title
              level={5}
              style={{ fontWeight: 500 }}
            >
              GirlsInCloud - dataRain - WoMakersCode
            </Title>
            <p>Junho - Agosto de 2023</p>
          </div>
          <Paragraph style={{  lineHeight: '30px' }}>
            Formação com foco em computação em nuvem para uma turma de 200
            alunas feita por instrutores da consultoria dataRain com apoio da
            AWS e comunidade WoMakersCode.
          </Paragraph>
        </Styled.Card>

        <Styled.Card
          href="https://www.rebase.com.br/#/"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: theme.color.orange.light }}
        >
          <div>
            <Title level={4} style={{ color: theme.color.white }}>
              Desenvolvedora de Software
            </Title>
            <Title
              level={5}
              style={{ fontWeight: 500, color: theme.color.white }}
            >
              Rebase
            </Title>
            <p style={{ color: theme.color.white }}>2020 | o momento</p>
          </div>
          <Paragraph style={{ color: theme.color.white, lineHeight: '30px' }}>
            Atuo como desenvolvedora de software na criação e manutenção de
            aplicações frontend e backend com Typescript, Elixir, Rails, React,
            entre outros.
          </Paragraph>
        </Styled.Card>
      </Styled.Cards>
    </Styled.Section>
  )
}

export default Experience
