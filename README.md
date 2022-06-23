# Projeto API de Blogs :black_nib:

## Sobre

#### Este projeto é uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um CRUD de posts :page_with_curl:

Foi desenvolvida uma API seguindo os princípios do REST e que conecta ao banco de dados `postgreSQL`.
Para acessar a API, é necessário que a pessoa usuária faça login com suas credencias e isso será autenticado e autorizado via JWT com a geração de token.

## Orientações

<details>

<summary><strong>:whale2: Rodando com Docker x Localmente</strong></summary><br/>

### 👉 Com Docker

> :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.

- Lembre-se de parar o `postgresql` se estiver usando localmente na porta padrão (`5432`), ou adapte o docker-compose caso queria fazer uso da aplicação em containers;

- Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

- A partir daqui você pode acessar o container `blogs_api` via CLI ou abri-lo no seu editor;

> :information_source: Use o comando `docker exec -it blogs_api bash`.

- Ele te dará acesso ao terminal interativo do container criado pelo docker-compose, que está rodando em segundo plano.

> :information_source: Ao rodar o docker-compose, ele automaticamente irá rodar os seguintes comandos:

- `npm install`: Irá instalar todas as dependências;

- `npm start`: Irá rodar a aplicação na porta `3000` pelo `nodemon`, ou adapte o docker-compose e o `.env` caso sinta necessidade.


### 👉 Sem Docker

> :information_source: Instale as dependências com `npm install`.

> :information_source: Rode a aplicação com `npm start` na porta `3000` pelo `nodemon`, ou adapte o `.env` caso sinta necessidade.

</details>

## Cliente

> :information_source: Após rodar a aplicação, você deverá acessar através de `http://localhost:{porta}/{rota}`

- Algumas sugestões de clientes:

  :pushpin: [HTTPie](https://httpie.io/)

  :pushpin: [Postman](https://www.postman.com/)

  :pushpin: [Insomnia](https://insomnia.rest/)

  :pushpin: [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
  

## Diagrama de Entidade-Relacionamento e Entidades

<img src="./public/assets/images/der.png"/>

## Arquitetura de Software

Este projeto foi elaborado nos padrões da arquiterua MSC onde existem três camadas:

- **Camada de Modelo (M)**: Arquivos onde iremos executar as operações do banco de dados, como criar conexões e executar queries;

- **Camada de Serviço (S)**: Arquivos onde iremos estruturar nossas regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo;

- **Camada de Controladores (C)**: Interface mais próxima da pessoa usuária ou de uma requisição, irá processar e chamar as devidas funções da camada de serviço.


<img src="./public/assets/images/msc-software-architecture.png"/>

## Exemplos
