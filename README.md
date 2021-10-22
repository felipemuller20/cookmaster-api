# ✌️ Boas vindas ao repositório do projeto CookMaster!

Este projeto Back-end foi realizado utilizando as camadas (Models, Service e Controllers).

Através dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou CRUD, para as pessoas mais íntimas).

Para realizar qualquer tipo de alteração no banco de dados (como cadastro, edição ou exclusão de receitas) será necessário autenticar-se. Além disso, as pessoas usuárias devem poder ser clientes ou administradores. Pessoas clientes apenas poderão disparar ações nas receitas que ele mesmo criou. Já uma pessoa administradora pode disparar qualquer ação em qualquer receita.

A autenticação é feita via JWT.

Podemos adicionar uma imagem à uma receita, utilizando o upload de arquivos fornecido pelo multer.

---

# 👀 Visualização

Para executar este programa no seu computador, faça o clone deste repositório com `git clone`. Em seguida, instale as dependências do projeto com `npm install` e execute o servidor o servidor local com o comando `npm start`.

Com o servidor rodando na sua máquina, você poderá realizar as seguintes requisições:

POST localhost:3000/users <br>
POST localhost:3000/login <br>
POST localhost:3000/recipes <br>

PUT localhost:3000/:id/image <br>
PUT localhost:3000/recipes/:id <br>

DELETE localhost:3000/recipes/:id <br>

GET localhost:3000/recipes/ <br>
GET localhost:3000/recipes/:id

---

# ⚛️ Tecnologias utilizadas

- Node.JS
- JavaScript
- JWT
- Arquitetura MSC
- API REST
- Testes de Integração

---

# ✍️ Habilidades desenvolvidas

- Entender o que há por dentro de um token de autenticação;
- Gerar tokens a partir de informações como login e senha;
- Autenticar rotas do Express, usando o token JWT;
- Fazer upload de arquivos em APIs REST;
- Salvar arquivos no servidor através de uma API REST;
- Consultar arquivos do servidor através de uma api REST.
- Realizar testes de integração

Além disso, neste projeto foi utilizado o ESLint, uma ferramenta para identificar divergências nos padrões de códigos JavaScript, garantindo as boas práticas no código e uma melhor legibilidade.

--- 
