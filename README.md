#Biblia Online
<sub>Acesse a Biblia facilmente de onde estiver!</sub>

---
## Apresentando a Biblia Online
A Biblia Online é uma Aplicação para leitura da Biblia desenvolvido em [Next.js](https://nextjs.org/), Typescript e [TailwindCSS](https://tailwindcss.com/). Consumindo os dados da API disponibilizado por ["A Biblia Digital"](https://www.abibliadigital.com.br/).

Desenvolvido por [Rafael Marques](github.com/rafamarquesrmb)

---
## Funcionalidades
  - Ao acessar a pagina inicial, você pode selecionar um dos livros da Bíblia.
  - Ao acessar o página de um Livro, será apresentado os capítulos desse livro.
  - Ao acessar a página do capítulo, será apresentado informações sobre o capítulo, assim como os respectivos versos.
  - Na página dos capítulos, fácil navegação para os capitulos anterior e próximo.
  -

  TODO:
  - Criar a UI das páginas
    - Responsivo
    - Tailwind
    - Minimalista com boa legibilidade
    - Criar logo?
    - Usar imagens?
  - As paginas devem conter SEO e serem Indexadas, SSG
  - Pensar sobre acessibilidade
  - Otimização de performance
  - Criar uma página de Sobre
  - FUNCIONALIDADES EXTRAS:
    - criar uma forma de acesso a versos randomicos (talvez incluir esse verso já na página inicial) - Nao deve ser indexado
    - talvez criar uma api própria?
    - Incluir mais de uma versão da biblia?
  - Atualizar o README

---
## Como executar a aplicação
Os comandos abaixo são realizados diretamente no seu Terminal.

Realize o clone do repositório e acesse o diretório.
```
git clone ....
cd biblia_online
```
Em seguida, instale as dependencias do projeto
```
yarn install
```
Para executar a aplicação em Localhost basta utilizar o comando Dev
```
yarn dev
```
Agora basta acessar no seu navegador http://localhost:3000 ou através da porta disponibilizada ao rodar o comando 'dev'

---

## Principais Dependências
- React
- Next
- Typescript
- TailwindCSS


---

## GIT COMMITS
Manual para padronizar as mensagens dos commits no GIT.
``````
SERV - Services
COMP - Components
PACK - Packages/Dependencies
CONFIG - Configurations
OTHER - Others

UI - Interface
FEAT - Features

NEW - New
DEL - Delete
UP - Update|Refactoring


& - "AND"

``````
### Exemplos
Apenas alguns exemplo de uso:
- Criei um novo component chamado PersonalHeader, com os arquivos
- ```git commit -m "COMP:NEW - PersonalHeader"```
- Fiz alterações na interface do componente PersonalHeader
```git commit -m "COMP:UI:UP - PersonalHeader - including background color"```
- Inclui uma feature envolvendo login ao componente PersonalHeader
```git commit -m "COMP:FEAT:NEW - PersonalHeader - login"```
- Criei um serviço para Login
  ```git commit -m "SERV:NEW - Login"```



---
Desenvolvido por [Rafael Marques](github.com/rafamarquesrmb)
