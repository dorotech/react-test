# Desafio para Front-end Developer na DoroTech

Somos uma empresa com clientes que atuam em vários segmentos do mercado, com diferentes tecnologias, culturas e desafios.

Gostamos de compor nossos times com profissionais multidisciplinares, que tenham alta capacidade de aprendizado, sejam detalhistas, resilientes, questionadores e curiosos. 
Você, como **Front-end Developer**, será o responsável por implementar, dar manutenção, aplicar correções e propor soluções em projetos de software.

## Orientações
Para executar o desafio de **Front-end Developer**, você **deverá utilizar framework React**, seguindo o [passo a passo](https://github.com/dorotech/frontend-test#etapas) para a execução, atendendo aos [critérios de aceitação](https://github.com/dorotech/frontend-test#crit%C3%A9rios-de-aceita%C3%A7%C3%A3o).

## Desafio
Nossa equipe é apaixonada por **Rick and Morty**, o seu desafio será criar uma aplicação utilizando a API pública da série [https://rickandmortyapi.com/](https://rickandmortyapi.com/), para exibir a lista de  personagens. 
Veja a documentação [https://rickandmortyapi.com/documentation/#rest](https://rickandmortyapi.com/documentation/#rest).

Os requisitos da aplicação:

- Como usuário, desejo visualizar na página inicial, uma lista de 20 personagens incialmente, contendo **foto**, **nome** e **status**, com o tamanho da paginação sendo dinamica, podendo ser selecionando, 5, 10 ou 20 itens por vez.
- Como usuário, desejo clicar em um personagem da lista, para visualizar informações detalhadas. (seja criativo a api contem diversas informaçoes)
- Como usuário, desejo filtrar os personagens por **nome**, **gênero**, **espécie** e **status**, alguns filtros são enums, seja criativo.
- Como usuário, desejo combinar varios filtros.
- Como usuário, gostaria de ter uma forma de acessar a imagem do pensonagem, abrindo a imagem em uma nova aba.

## Etapas

#### 1 - Fazer um fork desse repositório

![https://github.com/dorotech/frontend-test/raw/main/img/print-tutorial-1.png](https://github.com/dorotech/frontend-test/raw/main/img/print-tutorial-1.png)


#### 2 - Criar um branch com o seu primeiro e último nome
```bash
git checkout -b joao-silva
```

#### 3 - Escreva a documentação da sua aplicação
Você deve, substituir o conteúdo do arquivo **README.md** e escrever a documentação da sua aplicação, com os seguintes tópicos: 
- **Projeto**: Descreva o projeto e como você o executou. Seja objetivo.
- **Tecnologias**: Descreva quais tecnologias foram utilizadas, enumerando versões (se necessário) e os links para suas documentações,  qual guia de estilos de código você utilizou com o link para a sua documentação, quais bibliotecas instalou e porque.
- **Como rodar**: Descreva como iniciar a sua aplicação
- **Link** para acessar o projeto.

#### 4 - Faça uma Pull Request
Após implementada a solução, crie uma [pull request](https://github.com/dorotech/frontend-test/pulls) com o seu projeto para esse repositório, avise o recrutador.

## Critérios de Aceitação
Para que seu teste tenha o mínimo necessário que atenda aos requisitos esperados, ele deve:
- Atender ao que foi proposto no [Desafio](https://github.com/dorotech/frontend-test#Desafio).
- Utilização de pré-processadores CSS (Sass, Less).
- Interfaces responsivas para desktop, tablets e smartphones.
- Compatibilidade entre browsers.
- Padrão de escrita CSS (BEM, OOCSS, SMACSS).
- Código TS escrito com base em algum guia de estilos: [AirBnB Standards](https://github.com/airbnb/javascript) ou [TypeScript Google Guide](https://google.github.io/styleguide/tsguide.html).
- Utilizar padrões semânticos em mensagens de commit. (Gostamos do padrão de commits do repositório [AngularJS](http://karma-runner.github.io/3.0/dev/git-commit-msg.html))
- Projeto feito upload: [Firebase hosting](https://firebase.google.com/docs/hosting/quickstart?hl=pt-br) ou [GitHub Pages](https://pages.github.com/).
- Caso você nao consiga completar tudo e tenha algum receio, não se preocupe, iremos avaliar o que foi entregue, mesmo com pendências.
- O diferencial para este desafio: layout, ux e ui, bem como implementação de boas práticas de segurança, performance e/ou estrutura.
- [JSDOC](https://jsdoc.app/) nos principais itens do projeto. 


## Dicas e Informações Valiosas

#### O que gostaríamos de ver em seu teste:
- Upload do projeto em um seviço de hospedagem.
- Convenção de nome em classes, objetos, variáveis, métodos e etc.
- Layout encantador
- Faça commits regulares. Eles são melhores do que um commit gigantesco. Gostaríamos de ver commits organizados e padronizados, então capriche neles!
- Uso de libs como bootstrap, material, Evergreen e etc...
- Hooks é bem-vindo.
- Animações, Sobras, Menus, componentes de Libs de UX implementados. 
- Projeto feito usando TypeScript
- **Bônus 1** Dark Mode, implementação sendo um botão que mude o padrão de cores da pagina para escuro e claro com 1 click. 
- **Bônus 2** QueryParams para buscas, quando uma busca e realizada, exibir na URL o parâmetro da busca realizado, caso recaregar a página com a URL, usar o parâmetro para preencher os itens da pagina.
- **Bônus 3** Listagem de favoritos, com algum mecanismo de cache.
- **Bônus 4** Outros filtros além dos sugeridos na descrição inicial
- **Bônus 5** GitHub action como serviço de publicação do projeto pronto.

**Observação:** Nenhum dos itens acima é obrigatório.

#### O que o seu Teste não deve ter:
- Saber que não foi você quem implementou o projeto.
- Varias bibliotecas instaladas sem uso.
- Falta de organização de código.
- Falta de documentação.
- Nome de variáveis sem sentido ou sem padrão de nomes.
- Histórico de commits desorganizado e despadronizado.

## Boa Sorte!! 
