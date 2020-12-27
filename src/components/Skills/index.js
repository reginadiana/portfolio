import React from "react";
import { CodeSandboxOutlined } from "@ant-design/icons";
import { Container, Cards, Card, Icon, Lenguage, Description } from "./style";
import TitleSection from "../TitleSection/index";
import { themes } from "../../themes";

const {
  lightPink,
  lightBrown,
  lightOrange,
  lightBlue,
  green,
  blue,
  orange,
} = themes.colors;

const Skills = () => (
  <Container id="skills">
    <TitleSection
      title="Linguagens e Ferramentas"
      description="Conheça as principais tecnologias do meu dia a dia"
    />
    <Cards>
      <Card color={lightPink}>
        <Icon>
          <CodeSandboxOutlined />
        </Icon>
        <Lenguage>HTML</Lenguage>
        <Description>Para construção da estrutura das páginas</Description>
      </Card>

      <Card color={lightBrown}>
        <Icon>
          <CodeSandboxOutlined />
        </Icon>
        <Lenguage>CSS</Lenguage>
        <Description>Para estilização das telas</Description>
      </Card>

      <Card color={lightOrange}>
        <Icon>
          <CodeSandboxOutlined />
        </Icon>
        <Lenguage>JS e React</Lenguage>
        <Description>Para o frontend das minhas aplicações</Description>
      </Card>

      <Card color={green}>
        <Icon>
          <CodeSandboxOutlined />
        </Icon>
        <Lenguage>Vue</Lenguage>
        <Description>Para o frontend das minhas aplicações</Description>
      </Card>

      <Card color={lightBlue}>
        <Icon>
          <CodeSandboxOutlined />
        </Icon>
        <Lenguage>Ruby e Ruby on Rails</Lenguage>
        <Description>Para o backend das minhas aplicações</Description>
      </Card>

      <Card color={orange}>
        <Icon>
          <CodeSandboxOutlined />
        </Icon>
        <Lenguage>Elixir e Phoenix</Lenguage>
        <Description>Para o backend das minhas aplicações</Description>
      </Card>

      <Card color={blue}>
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

export default Skills;
