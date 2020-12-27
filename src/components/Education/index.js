import React from "react";
import { Cards, Card, Title, Info, Location, Date, Description } from "./style";
import TitleSection from "../TitleSection/index";
import {
  ETEC,
  FATEC,
  WOMAKERSCODE,
  CAMPUS,
  REBASE,
} from "../../services/links";

const Education = () => (
  <div>
    <TitleSection
      title="Formação e Bootcamps"
      description="Sabia onde estudei e os bootcamps que participei"
    />
    <Cards>
      <Card>
        <Info>
          <div>
            <Title>Técnico em Eletrônica</Title>
            <Location href={ETEC}>ETEC Julio de Mesquita</Location>
          </div>
          <Date>2016 | 2017</Date>
        </Info>

        <Description>
          Corroendo as primeiras plaquinhas e programando PIC's, tem coisa
          melhor do que ver um led piscando e saber que funciona?
        </Description>
      </Card>

      <Card>
        <Info>
          <div>
            <Title>Tecnologia em Mecatrônica Industrial</Title>
            <Location href={FATEC}>FATEC Santo André</Location>
          </div>
          <Date>2017 | 2019</Date>
        </Info>
        <Description>
          Uma das coisas mais importantes da minha vida foi ter feito
          Mecatrônica. Foi lá que descobri a tecnologia
        </Description>
      </Card>

      <Card>
        <Info>
          <div>
            <Title>Estágio em Eletrônica</Title>
            <Location href={ETEC}>ETEC Julio de Mesquita</Location>
          </div>
          <Date>2018</Date>
        </Info>

        <Description>
          Mais do que consertar placas, aprendi a seguir meu coração ao tomar
          decisões na vida profissional
        </Description>
      </Card>

      <Card>
        <Info>
          <div>
            <Title>Monitorias de linguagem C</Title>
            <Location href={FATEC}>FATEC Santo André</Location>
          </div>
          <Date>2019</Date>
        </Info>

        <Description>
          Ajudei muitos alunos onde estudava, sempre tentando mostrar como
          programar é incrível
        </Description>
      </Card>

      <Card>
        <Info>
          <div>
            <Title>Bootcamp de React</Title>
            <Location href={WOMAKERSCODE}>WoMakersCode</Location>
          </div>
          <Date>Abril | 2020</Date>
        </Info>
        <Description>
          Lugar onde conheci mulheres incríveis e uma lib que me apaixonei
        </Description>
      </Card>

      <Card>
        <Info>
          <div>
            <Title>Treina Dev</Title>
            <Location href={CAMPUS}>Campus Code</Location>
          </div>
          <Date>Julho | 2020</Date>
        </Info>
        <Description>
          Onde aprendi que o importante não é escrever código, é como escrever
          código
        </Description>
      </Card>

      <Card>
        <Info>
          <div>
            <Title>Desenvolvedora</Title>
            <Location href={REBASE}>Rebase</Location>
          </div>
          <Date>2020</Date>
        </Info>
        <Description>
          Friozinho na barriga, mas tudo certo. É aqui que vou enfrentar novos
          desafios.
        </Description>
      </Card>
    </Cards>
  </div>
);

export default Education;
