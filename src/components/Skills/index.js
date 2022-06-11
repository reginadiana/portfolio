import React from "react";
import { CodeSandboxOutlined } from "@ant-design/icons";
import * as Styled from "./style";
import TitleSection from "../TitleSection/index";
import { theme } from "../../theme";

const Skills = () => (
  <Styled.Container id="skills">
    <TitleSection
      title="Linguagens e Ferramentas"
      description="Conheça as principais tecnologias do meu dia a dia"
    />
    <Styled.Cards>
      <Styled.Card color={theme.color.pink.light}>
        <Styled.Icon>
          <CodeSandboxOutlined />
        </Styled.Icon>
        <Styled.Lenguage>HTML</Styled.Lenguage>
        <Styled.Description>
          Para construção da estrutura das páginas
        </Styled.Description>
      </Styled.Card>

      <Styled.Card color={theme.color.brown.light}>
        <Styled.Icon>
          <CodeSandboxOutlined />
        </Styled.Icon>
        <Styled.Lenguage>CSS</Styled.Lenguage>
        <Styled.Description>Para estilização das telas</Styled.Description>
      </Styled.Card>

      <Styled.Card color={theme.color.orange.light}>
        <Styled.Icon>
          <CodeSandboxOutlined />
        </Styled.Icon>
        <Styled.Lenguage>JS e React</Styled.Lenguage>
        <Styled.Description>
          Para o frontend das minhas aplicações
        </Styled.Description>
      </Styled.Card>

      <Styled.Card color={theme.color.green}>
        <Styled.Icon>
          <CodeSandboxOutlined />
        </Styled.Icon>
        <Styled.Lenguage>Vue</Styled.Lenguage>
        <Styled.Description>
          Para o frontend das minhas aplicações
        </Styled.Description>
      </Styled.Card>

      <Styled.Card color={theme.color.blue.light}>
        <Styled.Icon>
          <CodeSandboxOutlined />
        </Styled.Icon>
        <Styled.Lenguage>Ruby e Ruby on Rails</Styled.Lenguage>
        <Styled.Description>
          Para o backend das minhas aplicações
        </Styled.Description>
      </Styled.Card>

      <Styled.Card color={theme.color.orange.regular}>
        <Styled.Icon>
          <CodeSandboxOutlined />
        </Styled.Icon>
        <Styled.Lenguage>Elixir e Phoenix</Styled.Lenguage>
        <Styled.Description>
          Para o backend das minhas aplicações
        </Styled.Description>
      </Styled.Card>

      <Styled.Card color={theme.color.blue.regular}>
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
