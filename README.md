## Projeto

Projeto consiste de apenas uma feature, browse (busca), para buscar os personagens do Rick e Morty. A estrutura de pastas no projeto segue por meio de features, portanto, os arquivos não são organizado por tipos e sim por feature/função, dessa forma qualquer dev novo ao bater o olho no projeto já sabe do que se trata.

Temos 5 suites de testes, eu tentei cobrir as principais jornadas do usuário, e usei Dependency injection para facilmente mocar alguns serviços, tentei ao máximo aplicar o SOLID para no fim ter um codigo testável, flexível e desacoplado. Como meu codigo esta testado poderia trabalhar em um refactoring e utilizar algumas abstrações, porém o tempo foi um problema.

## Tecnologias

**Next Js**: Framework focado para produção, sua principal feature é rederização no servidor (SSR) e geração de páginas estáticas (SSG). Escolhi o Next.Js sobre tudo por sua excelente developer experience, ferramentas como code-spliting, client routing por pastas, otimização de images, um module-blunder configurado de fábrica, serviços de hosting da vercel e dentre outras features.

**HeadlessUI**: Uma lib de components totalmente sem estilos, fornecendo apenas apis e totalmente accessivel. Escolhi essa lib devido a sua facilidade de construir componentes totalmente accessiveis.

**TailwindCSS**: Framework CSS focado em fornecer classes utilitarias ao inves de componentes totalmente feitos. Escolhi essa lib pela facilidade e velocidade de construir qualquer design system.

**React Query**: Uma lib para cache/gerenciamento de estado para requisições HTTP. Escolhi essa lib devido ao seu grande impacto na experiencia do usuario e na Developer experience.

Essas foram as principais bibliotecas usadas, mas usei **Jest** junto **Testing Library** para fazer teste de unidade e integração, **eslint** junto com style-guide do **airbnb**, libs como **class-variance-authority e tailwind-merge** foram usadas para melhorar a Developer experience com o **TailwindCSS**.

## Como rodar

Passo a passo de como rodar esse projeto.

1. Clone o projeto
2. git checkout joao-rodrigues (muda para minha branch)
3. yarn ou npm i (para instalar todas as dependencias)
4. yarn dev ou npm run dev (para rodar o projeto em modo desenvolvedor)

Quer fazer uma build e rodar ?

1. yarn build ou npm run build (faz uma build)
2. yarn start ou npm run start (roda a versao de build)

## Link

Deploy: https://rick-morty-beta-orpin.vercel.app/
