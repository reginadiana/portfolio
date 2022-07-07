import React from "react";
import * as Styled from "./style";
import TitleSection from "../TitleSection/index";
import { profissional } from "../../services/links";

const Education = () => (
  <div id="education">
    <TitleSection
      title="Formação e Bootcamps"
      description="Sabia onde estudei e os bootcamps que participei"
    />
    <Styled.Cards>
      <Styled.Card>
        <Styled.Info>
          <div>
            <Styled.Title>Técnico em Eletrônica</Styled.Title>
            <Styled.Location href={profissional.etec}>
              ETEC Julio de Mesquita
            </Styled.Location>
          </div>
          <Styled.Date>2016 | 2017</Styled.Date>
        </Styled.Info>

        <Styled.Description>
          Corroendo as primeiras plaquinhas e programando PIC's, tem coisa
          melhor do que ver um led piscando e saber que funciona?
        </Styled.Description>
      </Styled.Card>

      <Styled.Card>
        <Styled.Info>
          <div>
            <Styled.Title>Tecnologia em Mecatrônica Industrial</Styled.Title>
            <Styled.Location href={profissional.fatec}>
              FATEC Santo André
            </Styled.Location>
          </div>
          <Styled.Date>2017 | 2019</Styled.Date>
        </Styled.Info>
        <Styled.Description>
          Uma das coisas mais importantes da minha vida foi ter feito
          Mecatrônica. Foi lá que descobri a tecnologia
        </Styled.Description>
      </Styled.Card>

      <Styled.Card>
        <Styled.Info>
          <div>
            <Styled.Title>Estágio em Eletrônica</Styled.Title>
            <Styled.Location href={profissional.etec}>
              ETEC Julio de Mesquita
            </Styled.Location>
          </div>
          <Styled.Date>2018</Styled.Date>
        </Styled.Info>

        <Styled.Description>
          Mais do que consertar placas, aprendi a seguir meu coração ao tomar
          decisões na vida profissional
        </Styled.Description>
      </Styled.Card>

      <Styled.Card>
        <Styled.Info>
          <div>
            <Styled.Title>Monitorias de linguagem C</Styled.Title>
            <Styled.Location href={profissional.fatec}>
              FATEC Santo André
            </Styled.Location>
          </div>
          <Styled.Date>2019</Styled.Date>
        </Styled.Info>

        <Styled.Description>
          Ajudei muitos alunos onde estudava, sempre tentando mostrar como
          programar é incrível
        </Styled.Description>
      </Styled.Card>

      <Styled.Card>
        <Styled.Info>
          <div>
            <Styled.Title>Bootcamp de React</Styled.Title>
            <Styled.Location href={profissional.womakerscode}>
              WoMakersCode
            </Styled.Location>
          </div>
          <Styled.Date>Abril | 2020</Styled.Date>
        </Styled.Info>
        <Styled.Description>
          Lugar onde conheci mulheres incríveis e uma lib que me apaixonei
        </Styled.Description>
      </Styled.Card>

      <Styled.Card>
        <Styled.Info>
          <div>
            <Styled.Title>Treina Dev</Styled.Title>
            <Styled.Location href={profissional.campus}>
              Campus Code
            </Styled.Location>
          </div>
          <Styled.Date>Julho | 2020</Styled.Date>
        </Styled.Info>
        <Styled.Description>
          Onde aprendi que o importante não é escrever código, é como escrever
          código
        </Styled.Description>
      </Styled.Card>

      <Styled.Card>
        <Styled.Info>
          <div>
            <Styled.Title>Desenvolvedora</Styled.Title>
            <Styled.Location href={profissional.rebase}>Rebase</Styled.Location>
          </div>
          <Styled.Date>2020</Styled.Date>
        </Styled.Info>
        <Styled.Description>
          Friozinho na barriga, mas tudo certo. É aqui que vou enfrentar novos
          desafios.
        </Styled.Description>
      </Styled.Card>
    </Styled.Cards>
  </div>
);

export default Education;
