import React from "react";
import { CodeSandboxOutlined } from "@ant-design/icons";
import * as Styled from "./style";
import TitleSection from "../TitleSection/index";
import { theme } from "../../theme";

const Skills = () => (
  <Styled.Section id="skills">
    <TitleSection
      title="Linguagens e Ferramentas"
      description="Conheça as tecnologias do meu dia a dia"
    />
    <Styled.Cards>
      <Styled.Card color={theme.color.pink.light}>
        <Styled.Span>
          <CodeSandboxOutlined />
        </Styled.Span>
        <Styled.TH3>HTML</Styled.TH3>
        <Styled.Paragraphy>
          Para construção da estrutura das páginas
        </Styled.Paragraphy>
      </Styled.Card>

      <Styled.Card color={theme.color.brown.light}>
        <Styled.Span>
          <CodeSandboxOutlined />
        </Styled.Span>
        <Styled.TH3>CSS</Styled.TH3>
        <Styled.Paragraphy>Para estilização das telas</Styled.Paragraphy>
      </Styled.Card>

      <Styled.Card color={theme.color.orange.light}>
        <Styled.Span>
          <CodeSandboxOutlined />
        </Styled.Span>
        <Styled.TH3>JS</Styled.TH3>
        <Styled.Paragraphy>
          Para o frontend das minhas aplicações
        </Styled.Paragraphy>
      </Styled.Card>

      <Styled.Card color={theme.color.orange.light}>
        <Styled.Span>
          <CodeSandboxOutlined />
        </Styled.Span>
        <Styled.TH3>React</Styled.TH3>
        <Styled.Paragraphy>
          Para o frontend das minhas aplicações
        </Styled.Paragraphy>
      </Styled.Card>

      <Styled.Card color={theme.color.orange.light}>
        <Styled.Span>
          <CodeSandboxOutlined />
        </Styled.Span>
        <Styled.TH3>Jest</Styled.TH3>
        <Styled.Paragraphy>
          Para testar o frontend das minhas aplicações
        </Styled.Paragraphy>
      </Styled.Card>

      <Styled.Card color={theme.color.orange.light}>
        <Styled.Span>
          <CodeSandboxOutlined />
        </Styled.Span>
        <Styled.TH3>Vimeo SDK</Styled.TH3>
        <Styled.Paragraphy>
          Para servir e gerenciar players do Vimeo
        </Styled.Paragraphy>
      </Styled.Card>

      <Styled.Card color={theme.color.orange.light}>
        <Styled.Span>
          <CodeSandboxOutlined />
        </Styled.Span>
        <Styled.TH3>Antd</Styled.TH3>
        <Styled.Paragraphy>
          Para aproveitar recursos de layout para construir telas de forma mais
          rápida e dar manutenção de forma dinamica
        </Styled.Paragraphy>
      </Styled.Card>

      <Styled.Card color={theme.color.orange.light}>
        <Styled.Span>
          <CodeSandboxOutlined />
        </Styled.Span>
        <Styled.TH3>Git</Styled.TH3>
        <Styled.Paragraphy>
          Para realizar o controle de versão dos projetos, alterações em código,
          etc.
        </Styled.Paragraphy>
      </Styled.Card>

      <Styled.Card color={theme.color.green}>
        <Styled.Span>
          <CodeSandboxOutlined />
        </Styled.Span>
        <Styled.TH3>Vue</Styled.TH3>
        <Styled.Paragraphy>
          Para o frontend das minhas aplicações
        </Styled.Paragraphy>
      </Styled.Card>

      <Styled.Card color={theme.color.blue.light}>
        <Styled.Span>
          <CodeSandboxOutlined />
        </Styled.Span>
        <Styled.TH3>Ruby e Ruby on Rails</Styled.TH3>
        <Styled.Paragraphy>
          Para o backend das minhas aplicações
        </Styled.Paragraphy>
      </Styled.Card>

      <Styled.Card color={theme.color.orange.regular}>
        <Styled.Span>
          <CodeSandboxOutlined />
        </Styled.Span>
        <Styled.TH3>Elixir e Phoenix</Styled.TH3>
        <Styled.Paragraphy>
          Para o backend das minhas aplicações
        </Styled.Paragraphy>
      </Styled.Card>

      <Styled.Card color={theme.color.blue.regular}>
        <Styled.Span>
          <CodeSandboxOutlined />
        </Styled.Span>
        <Styled.TH3>Docker</Styled.TH3>
        <Styled.Paragraphy>
          Para executar minhas aplicações em ambientes virtuais
        </Styled.Paragraphy>
      </Styled.Card>
    </Styled.Cards>
  </Styled.Section>
);

export default Skills;
