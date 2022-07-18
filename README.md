# Desafio para Frontend Developer na DoroTech

Desafio dado para a vaga de Frotend Developer na DoroTech.

Live: https://rick-morty-rolodex.netlify.app/

## Projeto

Projeto de [rolodex](https://en.wikipedia.org/wiki/Rolodex) usando a [API do Rick and Morty](https://en.wikipedia.org/wiki/Rick_and_Morty) para buscar dados sobre os personagens.

## Tecnologias

- [React](https://reactjs.org/)

This project was supposed to be in React.

- [Typescript](https://www.typescriptlang.org/)

As requested by the rules.

- [TailwindCSS](https://tailwindcss.com/)

I tried using TailwindCSS as it's all "inline" CSS and I didn't want to use as many separate CSS files. Although I'd say as the project kept going, this started to get burdensome. For a simple project like this, I thought it was fine to use inline CSS. It's also quit easy to implement dark mode with TailWindCSS.

- [Poppins Font](https://fonts.google.com/specimen/Poppins#standard-styles)

Cool font so I don't get a page that looks like a Word document.

- [Font Awesome](https://fontawesome.com/)

To get some free icons for the project.

- [Axios](https://axios-http.com/docs/intro)

Used to GET the API data.

- [Sass](https://sass-lang.com/)

Barely used since I was using TailwindCSS.

- [Eslint](https://eslint.org/)

So I can fix my code according to the AirBNB best practices.

- [Jason Watmore's Blog - Pure Pagination Logic](https://jasonwatmore.com/post/2018/08/07/javascript-pure-pagination-logic-in-vanilla-js-typescript)

I needed a fast way to get the pagination going. This tutorial and code helped me quite a lot.

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

Although styling is being avaliated, I didn't change favicons and logos that come with the create-react-app template.