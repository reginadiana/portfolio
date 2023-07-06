import React from 'react'
import { CodeSandboxOutlined } from '@ant-design/icons'
import Title from '@ui/Title'
import { useTranslation } from 'react-i18next'
import * as Styled from './style'

const Skills = () => {
  const { t } = useTranslation()

  return (
    <Styled.Section id="skills">
      <Title
        title='Linguagens e Ferramentas'
        description='Conheça as tecnologias do meu dia a dia'
      />

      <Styled.Title>Frontend</Styled.Title>
      <Styled.Cards>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>React</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>Typescript</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>Vue</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>HTML</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>CSS</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>Javascript</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>Antd Design (design system)</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>MUI (design system)</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>Vimeo SDK</Styled.Subtitle>
        </Styled.Card>
      </Styled.Cards>
      <Styled.Title>Backend</Styled.Title>
      <Styled.Cards>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>Ruby</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>Rails</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>Elixir</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>Phoenix</Styled.Subtitle>
        </Styled.Card>
      </Styled.Cards>

      <Styled.Title>Ferramentas</Styled.Title>

      <Styled.Cards className='last__card__g'>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>Docker</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>Git</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card className='last__card'>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>AWS</Styled.Subtitle>
        </Styled.Card>
      </Styled.Cards>
    </Styled.Section>
  )
}

export default Skills
