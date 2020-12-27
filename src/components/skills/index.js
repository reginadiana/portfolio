import React from "react";
import { CodeSandboxOutlined } from "@ant-design/icons";
import { Container, Cards, Card, Icon, Lenguage, Description } from "./style";
import TitleSection from "../title_section/index";

function Skills(props) {
  return (
    <Container id="skills">
      <TitleSection
        title="Linguagens e Ferramentas"
        description="Conheça as principais tecnologias do meu dia a dia"
      />
      <Cards>
        <Card color="var(--lightPink)">
          <Icon>
            <CodeSandboxOutlined />
          </Icon>
          <Lenguage>HTML</Lenguage>
          <Description>Para construção da estrutura das páginas</Description>
        </Card>

        <Card color="var(--lightBrown)">
          <Icon>
            <CodeSandboxOutlined />
          </Icon>
          <Lenguage>CSS</Lenguage>
          <Description>Para estilização das telas</Description>
        </Card>

        <Card color="var(--lightOrange)">
          <Icon>
            <CodeSandboxOutlined />
          </Icon>
          <Lenguage>JS e React</Lenguage>
          <Description>Para o frontend das minhas aplicações</Description>
        </Card>

        <Card color="var(--lightOrange)">
          <Icon>
            <CodeSandboxOutlined />
          </Icon>
          <Lenguage>Vue</Lenguage>
          <Description>Para o frontend das minhas aplicações</Description>
        </Card>

        <Card color="var(--lightBlue)">
          <Icon>
            <CodeSandboxOutlined />
          </Icon>
          <Lenguage>Ruby e Ruby on Rails</Lenguage>
          <Description>Para o backend das minhas aplicações</Description>
        </Card>

        <Card color="var(--lightBlue)">
          <Icon>
            <CodeSandboxOutlined />
          </Icon>
          <Lenguage>Elixir e Phoenix</Lenguage>
          <Description>Para o backend das minhas aplicações</Description>
        </Card>

        <Card color="var(--lightBlue)">
          <Icon>
            <CodeSandboxOutlined />
          </Icon>
          <Lenguage>Docker</Lenguage>
          <Description>
            Para executar minhas aplicações em ambientes virtuais
          </Description>
        </Card>
      </Cards>
    </Container>
  );
}

export default Skills;
