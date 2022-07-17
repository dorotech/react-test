# Desafio para Frontend Developer na DoroTech

Desafio dado para a vaga de Frotend Developer na DoroTech.

Live: https://rick-morty-rolodex.netlify.app/

## Projeto

Projeto de [rolodex](https://en.wikipedia.org/wiki/Rolodex) usando a [API do Rick and Morty](https://en.wikipedia.org/wiki/Rick_and_Morty) para buscar dados sobre os personagens.

## Tecnologias

- [React](https://reactjs.org/)

- [Typescript](https://www.typescriptlang.org/)

- [TailwindCSS](https://tailwindcss.com/)

- [Poppins Font](https://fonts.google.com/specimen/Poppins#standard-styles)

- [Font Awesome](https://fontawesome.com/)

- [Axios](https://axios-http.com/docs/intro)

- [Sass](https://sass-lang.com/)

- [Eslint](https://eslint.org/)

- [Jason Watmore's Blog - Pure Pagination Logic](https://jasonwatmore.com/post/2018/08/07/javascript-pure-pagination-logic-in-vanilla-js-typescript)

## Getting Started // Iniciando sua aplicação

- Clone this repository

- npm install

- npm start

That would be it!

## Live Project

[Rick and Morty Rolodex - Netlify](https://rick-morty-rolodex.netlify.app/)

## Comments about the project

I didn't have enough time to implement a favorites/bookmark feature as I'd like to do.

Dynamic pagination was/is quite hard to implement when the API only servers you exactly 20 characters at once. It's possible, but would take a lot of time. Check "Jason Watmore's Blog - Pure Pagination Logic" in the [Tecnologias](##Tecnologias) section.

Tailwind CSS was great to start with, but I didn't like the way it was implemented. In the end, I had to change inlines to actual classes so it would at least look better to whoever is reading the code.

AirBNB ESLint rules were a bit confusing to implement many times when using a project in TS.