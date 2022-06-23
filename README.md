# Projeto API de Blogs :black_nib:
<br />
<div align="center">
 <img src="./public/assets/images/banner.png" alt="Ilustração de pessoas autoras de blogs escrevendo artigos" width="1000">
</div>

<h2>Índice</h2>

 :round_pushpin: [Sobre](#sobre)<br />
 :round_pushpin: [Tecnologias](#tecnologias)<br />
 :round_pushpin: [Decisões](#decisoes)<br />
 :round_pushpin: [Diagrama de Entidade-Relacionamento](#dre)<br />
 :round_pushpin: [Arquitetura de Software](#arquitetura)<br />
 :round_pushpin: [Orientações](#orientacoes)<br />
 :round_pushpin: [Clientes](#cliente)<br />
 :round_pushpin: [Rotas](#rotas)<br />
 
<h2 id="sobre">Sobre</h2>

#### Este projeto é uma aplicação em `Node.js` usando o pacote `Sequelize` para fazer um CRUD de posts :page_with_curl:

Foi desenvolvida uma API seguindo os princípios do REST e que conecta ao banco de dados `postgreSQL`.
Para acessar a API, é necessário que a pessoa usuária faça login com suas credencias e isso será autenticado e autorizado via JWT com a geração de token.
<br />
<h2 id="tecnologias">Tecnologias</h2>

<div>
  <img title="JavaScript" alt="JavaScript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img title="NodeJS" alt="NodeJS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
  <img title="Nodemon" alt="Nodemon" height="30" width="30" src="./public/assets/images/nodemon.png">
  <img title="Express" alt="Express" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg">
  <img title="JWT" alt="JWT" height="30" width="30" src="./public/assets/images/jwt.png">
  <img title="Docker" alt="Docker" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg">
   <img title="PostgreSQL" alt="PostgreSQL" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg">
</div>

<h2 id="decisoes">Decisões</h2>

 <img title="ESLint" alt="ESLint" height="20" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg"> [ESLint](https://eslint.org/)

- O projeto possui regras estritas de ESLint (Airbnb) para JavaScript onde é possível encontrar e corrigir problemas, seguindo boas práticas e padronização.

<img title="Docker" alt="Docker" height="20" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"> [Docker](https://www.docker.com/)

- Utilizar imagens Docker para empacotar toda a aplicação e suas dependências, torna a distribuição mais fácil, segura e padronizada.

<img title="Sequelize" alt="Sequelize" height="20" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg"> [Sequelize](https://sequelize.org/)

- Como uma das bibliotecas de ORM mais conhecidas, o Sequelize foi utilizado nesse projeto pois o código se torna mais legível, extensível e de fácil manutenção.

<img title="JWT" alt="JWT" height="15" width="15" src="./public/assets/images/jwt.png"> [JWT](https://jwt.io/)

- Os JSON Web Tokens representam a autenticação e autorização de forma eficaz e simples.


<h2 id="dre">Diagrama de Entidade-Relacionamento</h2>

<img src="./public/assets/images/der.png"/>

<h2 id="arquitetura">Arquitetura de Software</h2>

Este projeto foi elaborado nos padrões da arquitetura MSC onde existem três camadas:

- **Camada de Modelo (M)**: Arquivos que executam as operações do banco de dados, como criar conexões e executar queries;

- **Camada de Serviço (S)**: Arquivos que estruturam as regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo;

- **Camada de Controladores (C)**: Interface mais próxima da pessoa usuária ou de uma requisição, irá processar e chamar as devidas funções da camada de serviço.


<img src="./public/assets/images/msc-software-architecture.png"/><br /><br />

<h2 id="orientacoes">Orientações</h2>

<details>

<summary id="env"><strong>:closed_lock_with_key: Arquivos example.env e .env</strong></summary><br/>
  
> :information_source: Você encontrará um arquivo `example.env` onde estarão as variáveis de ambiente utilizadas no projeto, duplique-o e renomeie-o apenas para `.env` e insira os valores nas variáveis de ambiente conforme sua utilização.
<br />
  
</details>

<details>

<summary id="docker"><strong>:whale2: Rodando com Docker x Localmente</strong></summary>

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


<h2 id="cliente">Clientes</h2>

> :information_source: Após rodar a aplicação, você deverá acessar através de `http://localhost:{porta}/{rota}`

- Algumas sugestões de clientes:

  :bulb: [HTTPie](https://httpie.io/) | :bulb: [Postman](https://www.postman.com/) | :bulb: [Insomnia](https://insomnia.rest/) | :bulb: [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)


<h2 id="rotas">Rotas</h2>

<details>

<summary><strong>:triangular_flag_on_post: Rotas GET</strong></summary>
  
  - `http://localhost:3000/user`
  
    Retorna com sucesso todas as pessoas usuárias cadastradas no banco de dados, com um status http `200`.
 
      <details>
       
       <summary><h5>:green_circle: Retorno esperado</h5></summary>

     ```json
     [
       {
           "id": 1,
           "displayName": "Lewis Hamilton",
           "email": "lewishamilton@gmail.com",
           "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
       },

       /* ... */
     ]
     ```

      </details>
 
 <hr />

  - `http://localhost:3000/user/{id}`
  
    Retorna com sucesso a pessoa usuária cadastrada no banco de dados pelo `id`, com um status http `200`.
 
       <details>
       
       <summary><h5>:green_circle: Retorno esperado</h5></summary>

     ```json
     {
       "id": 1,
       "displayName": "Lewis Hamilton",
       "email": "lewishamilton@gmail.com",
       "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
     }
     ```

      </details>
 
 <hr />
 
   // _Inserir conteúdo_
  
  <details>

  <summary><strong>:triangular_flag_on_post: Rotas PUT</strong></summary>

    // _Inserir conteúdo_

  </details>

</details>

<details>

<summary><strong>:triangular_flag_on_post: Rotas POST</strong></summary>
  
 // _Inserir conteúdo_

</details>

<details>

<summary><strong>:triangular_flag_on_post: Rotas PUT</strong></summary>
  
  // _Inserir conteúdo_

</details>

<details>

<summary><strong>:triangular_flag_on_post: Rotas DELETE</strong></summary>
  
  // _Inserir conteúdo_

</details>
