# node-mongo-compose
Ecosistema basico microservice com frontend, backend, banco mongo utilizando docker e dockercompose

## 1. Baixar projeto
`$ git clone https://github.com/Maddytec/node-mongo-compose.git`

## 2. Inicializando os serviços
`$ cd node-mongo-compose`
`$ docker-compose up -d`

Requisitos para executar a API:
* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)

## 3. Como testar o projeto?

Após executar o item 2:

a) Acessar a URL: [http://localhost](http://localhost) para visualizar a pagina disponibilizada referente ao frontend

b) Acessar a URL: [http://localhost](http://localhost) para visualizar a pagina disponibilizada referente ao backend

## 4. Remover os serviços
`$ docker-compose stop`
`$ docker-compose rm`

## 5. License
Este código é open source.
