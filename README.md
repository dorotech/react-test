# Lista de Personagens da Série Animada Rick and Morty

## Link do projeto: https://rick-and-morty-list.web.app/

---

## O projeto:

Uma aplicação web que faz a listagem personagens da série [Rick and Morty](https://en.wikipedia.org/wiki/Rick_and_Morty) utilizando a API https://rickandmortyapi.com/.

---

## Features:

- Listar personagens por filtro de **Nome**, **Status**, **Specie**.
- Acessar página com informação individual do personagem e quais episódios ele estava presente.
    - Ao clicar em um episódio você vê quais outros personagens também estavam naquele episódio.
- É possível também você criar a sua lista de favoritos que será salva de forma local no seu navegador([localStorage](https://www.w3schools.com/html/html5_webstorage.asp)).
- Possui tema escuro.

---

## Tecnologias:

- [ReactJS](https://reactjs.org/) - Uma biblioteca JavaScript para construção de interfaces Web
- [TypeScript](https://www.typescriptlang.org/) - É uma linguagem fortemente tipada criada em cima do [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) - Guia de estilo de código.

---

## Bibliotecas:

- [Material UI](https://mui.com/) - Para criação de componentes estilizados.
- [React Router Dom v6](https://reactrouter.com/docs/en/v6) - Para fazer o gerenciamento de rotas pelo lado do cliente.
- [Eslint](https://eslint.org/) - Para seguir uma padronização de código e verificação de sintaxe
- [Prettier](https://prettier.io/) - Para ajudar na formatação do código como identação, semi-colons, aspas duplas ou não.
- [Vite](https://vitejs.dev/) - ferramenta utilizada para construção do projeto inicial com pré configurações que auxiliam no desenvolvimento e explora funcionalidades como [navite ES module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

---

## Como rodar o projeto em seu computador:

### Pré-requisitos:

- [nodejs](https://nodejs.org/dist/v16.16.0/node-v16.16.0-linux-x64.tar.xz) - para rodar a aplicação web local.
- [git](https://git-scm.com/) - para clonar o projeto.

1. Clone o projeto :
    
    ```bash
    git clone https://github.com/desogab/rick-and-morty-web-app-list.git && cd rick-and-morty-web-app-list
    ```
    
2. Instale as dependências com npm(vem junto com o nodejs):
    
    ```bash
    npm install
    
    #up to date, audited 360 packages in 732ms
    #
    #88 packages are looking for funding
    #  run `npm fund` for details
    #
    #found 0 vulnerabilities
    ```
    
3. Após instalada as dependências, rode o comando abaixo para abrir o seu projeto no navegador:
    
    ```bash
    npm run dev
    
    #vite v2.9.13 dev server running at:
    #
    #  > Local: http://localhost:3000/
    #  > Network: use `--host` to expose
    #
    # ready in 173ms.
    ```
    
4. É só abrir em algum navegador de sua preferência e acessar o projeto em http://localhost:3000/.