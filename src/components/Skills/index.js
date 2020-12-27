import React from "react";
import { CodeSandboxOutlined } from "@ant-design/icons";
import * as Styled from "./style";
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
  <Styled.Container id="skills">
    <TitleSection
      title="Linguagens e Ferramentas"
      description="Conheça as principais tecnologias do meu dia a dia"
    />
    <Styled.Cards>
      <Styled.Card color={lightPink}>
        <Styled.Icon>
          <CodeSandboxOutlined />
        </Styled.Icon>
        <Styled.Lenguage>HTML</Styled.Lenguage>
        <Styled.Description>
          Para construção da estrutura das páginas
        </Styled.Description>
      </Styled.Card>

      <Styled.Card color={lightBrown}>
        <Styled.Icon>
          <CodeSandboxOutlined />
        </Styled.Icon>
        <Styled.Lenguage>CSS</Styled.Lenguage>
        <Styled.Description>Para estilização das telas</Styled.Description>
      </Styled.Card>

      <Styled.Card color={lightOrange}>
        <Styled.Icon>
          <CodeSandboxOutlined />
        </Styled.Icon>
        <Styled.Lenguage>JS e React</Styled.Lenguage>
        <Styled.Description>
          Para o frontend das minhas aplicações
        </Styled.Description>
      </Styled.Card>

      <Styled.Card color={green}>
        <Styled.Icon>
          <CodeSandboxOutlined />
        </Styled.Icon>
        <Styled.Lenguage>Vue</Styled.Lenguage>
        <Styled.Description>
          Para o frontend das minhas aplicações
        </Styled.Description>
      </Styled.Card>

      <Styled.Card color={lightBlue}>
        <Styled.Icon>
          <CodeSandboxOutlined />
        </Styled.Icon>
        <Styled.Lenguage>Ruby e Ruby on Rails</Styled.Lenguage>
        <Styled.Description>
          Para o backend das minhas aplicações
        </Styled.Description>
      </Styled.Card>

      <Styled.Card color={orange}>
        <Styled.Icon>
          <CodeSandboxOutlined />
        </Styled.Icon>
        <Styled.Lenguage>Elixir e Phoenix</Styled.Lenguage>
        <Styled.Description>
          Para o backend das minhas aplicações
        </Styled.Description>
      </Styled.Card>

      <Styled.Card color={blue}>
        <Styled.Icon>
          <CodeSandboxOutlined />
        </Styled.Icon>
        <Styled.Lenguage>Docker</Styled.Lenguage>
        <Styled.Description>
          Para executar minhas aplicações em ambientes virtuais
        </Styled.Description>
      </Styled.Card>
    </Styled.Cards>
  </Styled.Container>
);

export default Skills;
