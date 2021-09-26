<p align="center">
<a href="https://dianaregina.netlify.app/"><img src="https://user-images.githubusercontent.com/46378210/93837769-cfff6200-fc5d-11ea-8e5a-ebc0489b8e76.png" width="50" alt="Meu site"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=Netlify&message=deploy&color=blue&style=for-the-badge&logo=netlify"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=vers%C3%A3o%20do%20projeto&message=v3.0.0&color=violet&style=for-the-badge&logo=github">
</p>

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

:small_blue_diamond: [Linguagens, dependencias e libs utilizadas ](#linguagens-dependencias-e-libs-utilizadas)

:small_blue_diamond: [Tarefas em aberto](#tarefas-em-aberto)

## Descrição do projeto 

<p align="justify">
  Esta é uma aplicação frontend para o meu site pessoal, mostrando informações do meu currículo como skills, formação e projetos de forma criativa e divertida. 
</p>

## Funcionalidades

:heavy_check_mark: Layout Responsívo 

:heavy_check_mark: Descrição das informações do meu currículo

## Deploy da Aplicação :dash:

> Acesse já: https://dianaregina.netlify.app/


## Pré-requisitos

:warning: [Yarn](https://yarnpkg.com/lang/pt-BR/docs/install/)

:warning: [Node](https://nodejs.org/en/download/)

## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/reginadiana/portfolio
```
Acesse a pasta
```
cd portfolio
```
Construa o docker e sua a aplicação com o container:
```
docker-compose up -d --build
docker-compose run --rm --service-ports app bash
```
Dentro do container, execute a aplicação:
```
yarn start
```

## Linguagens, dependencias e libs utilizadas 

:books: [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)

:books: [Styled Component](https://styled-components.com/)
