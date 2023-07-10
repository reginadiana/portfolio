import React from 'react'
import { Button, Card, Tag } from 'antd'

import { GithubOutlined } from '@ant-design/icons'

import SectionTitle from '@ui/SectionTitle'
import * as Styled from './style'

const { CheckableTag } = Tag

const Projects = () => {
  return (
    <Styled.Section id="projects">
      <SectionTitle
        title="Projetos"
        description="Conheça meus projetos no Github e em produção"
        invertedTheme
      />

      <Styled.Cards>
        <Card
          key="trello"
          extra={[
            <Button
              aria-label="Abrir no github"
              title="Abrir no github"
              target="_blank"
              rel="noreferrer"
              type="link"
              href="https://github.com/reginadiana/trello"
              danger
            >
              <GithubOutlined
                style={{
                  marginRight: '-15px',
                  fontSize: '20px',
                  color: 'black',
                }}
              />
            </Button>,
          ]}
          bordered={false}
          title="Trello"
        >
          <p>
            Plataforma para gerenciamento de tarefas
          </p>
          <Styled.Tags>
            <CheckableTag checked>React</CheckableTag>
            <CheckableTag checked>Redux</CheckableTag>
            <CheckableTag checked>Docker</CheckableTag>
          </Styled.Tags>
        </Card>

        <Card
          key="rebase"
          bordered={false}
          title="Rebase"
          extra={[
            <Button
              aria-label="Abrir no github"
              title="Abrir no github"
              target="_blank"
              rel="noreferrer"
              type="link"
              href="https://github.com/reginadiana/rebase"
              danger
            >
              <GithubOutlined
                style={{
                  marginRight: '-15px',
                  fontSize: '20px',
                  color: 'black',
                }}
              />
            </Button>,
          ]}
        >
          <p>
            Clone de UI/UX do site da empresa Rebase
          </p>
          <Styled.Tags>
            <CheckableTag checked>HTML</CheckableTag>
            <CheckableTag checked>CSS</CheckableTag>
            <CheckableTag checked>Javascript</CheckableTag>
          </Styled.Tags>
        </Card>

        <Card
          key="globoplay"
          extra={[
            <Button
              aria-label="Abrir no github"
              title="Abrir no github"
              target="_blank"
              rel="noreferrer"
              type="link"
              href="https://github.com/reginadiana/globoplay"
              danger
            >
              <GithubOutlined
                style={{
                  marginRight: '-15px',
                  fontSize: '20px',
                  color: 'black',
                }}
              />
            </Button>,
          ]}
          bordered={false}
          title="Globoplay"
        >
          <p>
            Plataforma de renderização e player de filmes, séries e mais do tipo
            Globoplay
          </p>
          <Styled.Tags>
            <CheckableTag checked>Docker</CheckableTag>
            <CheckableTag checked>Vue</CheckableTag>
          </Styled.Tags>
        </Card>

        <Card
          key="giphy"
          extra={[
            <Button
              aria-label="Abrir no github"
              title="Abrir no github"
              target="_blank"
              rel="noreferrer"
              type="link"
              href="https://github.com/reginadiana/giphy"
              danger
            >
              <GithubOutlined
                style={{
                  marginRight: '-15px',
                  fontSize: '20px',
                  color: 'black',
                }}
              />
            </Button>,
          ]}
          bordered={false}
          title="Giphy"
        >
          <p>
            Pesquisador de imagens animadas tipo Giphy
          </p>
          <Styled.Tags>
            <CheckableTag checked>React</CheckableTag>
            <CheckableTag checked>Docker</CheckableTag>
            <CheckableTag checked>Consumo de API</CheckableTag>
          </Styled.Tags>
        </Card>

        <Card
          key="marisa"
          extra={[
            <Button
              aria-label="Abrir no github"
              title="Abrir no github"
              target="_blank"
              rel="noreferrer"
              type="link"
              href="https://github.com/reginadiana/marisa"
              danger
            >
              <GithubOutlined
                style={{
                  marginRight: '-15px',
                  fontSize: '20px',
                  color: 'black',
                }}
              />
            </Button>,
          ]}
          bordered={false}
          title="Marisa"
        >
          <p>
            O objetivo principal é apresentar uma lista de items e construir
            todo o fluxo para a escolher, pagar e finalizar compras. Também
            apresentar layout baseado no site original, mas realizando melhorias
            de UI.
          </p>
          <Styled.Tags>
            <CheckableTag checked>Docker</CheckableTag>
            <CheckableTag checked>Typescript</CheckableTag>
          </Styled.Tags>
        </Card>

        <Card
          key="headhunters"
          extra={[
            <Button
              aria-label="Abrir no github"
              title="Abrir no github"
              target="_blank"
              rel="noreferrer"
              type="link"
              href="https://github.com/reginadiana/rebase"
              danger
            >
              <GithubOutlined
                style={{
                  marginRight: '-15px',
                  fontSize: '20px',
                  color: 'black',
                }}
              />
            </Button>,
          ]}
          bordered={false}
          title="Headhunters"
        >
          <p>
            O projeto é uma plataforma com foco em vagas de emprego para que
            recrutadores publiquem e recebam instrições, assim como candidatos
            possam buscar e se canditadar a elas.
          </p>
          <Styled.Tags>
            <CheckableTag checked>HTML</CheckableTag>
            <CheckableTag checked>CSS</CheckableTag>
            <CheckableTag checked>Javascript</CheckableTag>
          </Styled.Tags>
        </Card>

        <Card
          key="rental_cars"
          extra={[
            <Button
              aria-label="Abrir no github"
              title="Abrir no github"
              target="_blank"
              rel="noreferrer"
              type="link"
              href="https://github.com/reginadiana/headhunters"
              danger
            >
              <GithubOutlined
                style={{
                  marginRight: '-15px',
                  fontSize: '20px',
                  color: 'black',
                }}
              />
            </Button>,
          ]}
          bordered={false}
          title="Rental Cars"
        >
          <p>
            O projeto é uma aplicação backend com Ruby on Rails para um sistema
            interno de aluguel de carros. O administrador pode criar uma conta e
            agendar uma locação, escolhendo o modelo do carro, categoria, data
            de agendamento, etc.
          </p>
          <Styled.Tags>
            <CheckableTag checked>HTML</CheckableTag>
            <CheckableTag checked>CSS</CheckableTag>
            <CheckableTag checked>Ruby</CheckableTag>
            <CheckableTag checked>Rails</CheckableTag>
            <CheckableTag checked>TDD</CheckableTag>
          </Styled.Tags>
        </Card>

        <Card
          key="justin_bieber"
          extra={[
            <Button
              aria-label="Abrir no github"
              title="Abrir no github"
              target="_blank"
              rel="noreferrer"
              type="link"
              href="https://github.com/reginadiana/justinbieber"
              danger
            >
              <GithubOutlined
                style={{
                  marginRight: '-15px',
                  fontSize: '20px',
                  color: 'black',
                }}
              />
            </Button>,
          ]}
          bordered={false}
          title="Justin Bieber"
        >
          <p>
            Clone de UI/UX do site do cantor Justin Bieber
          </p>
          <Styled.Tags>
            <CheckableTag checked>HTML</CheckableTag>
            <CheckableTag checked>CSS</CheckableTag>
            <CheckableTag checked>Javascript</CheckableTag>
          </Styled.Tags>
        </Card>

        <Card
          key="flex_blog"
          extra={[
            <Button
              aria-label="Abrir no github"
              title="Abrir no github"
              target="_blank"
              rel="noreferrer"
              type="link"
              href="https://github.com/reginadiana/flexblog"
              danger
            >
              <GithubOutlined
                style={{
                  marginRight: '-15px',
                  fontSize: '20px',
                  color: 'black',
                }}
              />
            </Button>,
          ]}
          bordered={false}
          title="FlexBlog"
        >
          <p>
            Projeto de UX para aplicação de conceitos de flexbox do css
          </p>
          <Styled.Tags>
            <CheckableTag checked>HTML</CheckableTag>
            <CheckableTag checked>CSS</CheckableTag>
            <CheckableTag checked>Javascript</CheckableTag>
          </Styled.Tags>
        </Card>
      </Styled.Cards>
    </Styled.Section>
  )
}

export default Projects
