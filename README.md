
<h1 align="center">🧩 NodeJS + EXPRESS ⚡</h1>

<div align="center">
  <img alt="Static Badge" src="https://img.shields.io/badge/NodeJS%20-%20%23339933?style=for-the-badge&logo=nodedotjs&labelColor=black">
  <img width="12" />
  <img alt="Static Badge" src="https://img.shields.io/badge/express%20-%20%23ffffff?style=for-the-badge&logo=express&logoColor=black&labelColor=white&color=black">
</div>

<h2 align="center">🚀 Passo a Passo para Criar um Projeto Node.js com Express</h2>

**Pré-requisitos:**

Você precisa ter instalado:
- <img width="16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" /> `NodeJS` - https://nodejs.org/
- <img width="15" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" /> `postman` - https://www.postman.com/downloads/
- `npm` - ( *gerenciador de pacotes, já vem com o Node.js* )

🔍 Testando se está tudo certo:
```bash
node -v     # mostra a versão do Node.js
npm -v      # mostra a versão do npm
```

<h3 align="center">1. 🛠️ Inicie um projeto Node.js</h3>

Crie a pasta do seu projeto e nela crie o arquivo `package.json` ( *com as configurações do projeto* )

```bash
npm init -y
```

- Isso cria um `package.json` básico.

<h3 align="center">2. 📦 Instale o Express + Nodemon</h3>

Baixar express:
```bash
npm install express
```

Baixar nodemon:
```bash
npm install --save-dev nodemon
```
- O **nodemon** reinicia automaticamente o servidor quando você salva alterações:

No seu `package.json`, adicione os scripts para facilitar a execução:
```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

<h3 align="center">3. 🧾 Crie o arquivo principal do servidor</h3>

Crie o arquivo `index.js` na raiz do projeto e adicione o seguinte conteúdo:


```js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

```

<h4>🔍 Explicação linha por linha:</h4>

```js
const express = require('express');
```
- Aqui você importa o módulo **Express.**
- O `require` é usado para carregar módulos em `Node.js`.
- O módulo Express facilita a criação de servidores web e APIs.

```js
const app = express();
```
- Cria uma instância da aplicação **Express.**
- A variável `app` agora representa o seu servidor.

```js
const PORT = 3000;
```
- Define a porta onde o servidor vai "escutar".
- Aqui foi usada a porta `3000`, mas você pode mudar (ex: `8080`, `5000`, etc).

```js
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
```
- Essa é uma rota GET para o caminho / (raiz do site).

**Detalhando:**
  - `app.get(...)`: cria uma rota que responde requisições do tipo `GET`
  - `'/'`: é o caminho da URL (neste caso, `http://localhost:3000/`)
  - `(req, res) => { ... }`: função que será executada quando essa rota for acessada
    - `req`: Objeto da requisição (informações que o cliente envia)
    - `res`: Objeto da resposta (usado para enviar dados de volta)

**Dentro da função:**
  - `res.send(...)` envia uma resposta para o cliente (navegador, Postman, etc.)
  - Aqui, vai aparecer o texto **Hello, Express!**


```js
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```
- Esse comando inicia o servidor.
- `app.listen(PORT, callback)`:
  - Faz o servidor começar a "escutar" na porta definida.
  - O `callback` (função) é executado quando o servidor estiver rodando.
- Neste caso, mostra no terminal:
```besh
Servidor rodando em http://localhost:3000
```

<h3 align="center">4. ▶️ Execute o servidor</h3>

com o `nodemon` você pode iniciar com:
```
npm run dev
```

Você verá:
```
Servidor rodando em http://localhost:3000
```

Abra o navegador ou Postman e acesse: http://localhost:3000

<h2 align="center">Cria métodos POST, PUT, GET e DELETE</h2>

<h3 align="center">1. 🛠️ Habilite o uso de JSON no Express</h3>

Adicione o seguinte middleware ao seu código para permitir que o Express entenda requisições com corpo em formato JSON:
```js
app.use(express.json());
```
Isso é essencial para que o servidor consiga interpretar os dados enviados via POST ou PUT no formato JSON, como por exemplo:
```js
{ "nome": "Carlos", "idade": 22 }
```

<h3 align="center">2. 📥 Instale a biblioteca uuid</h3>

O `uuid` é uma biblioteca que permite gerar identificadores únicos. Isso é útil, por exemplo, para atribuir um ID único a cada pessoa cadastrada no seu sistema.

Para instalar, execute no terminal:
```bash
npm install uuid
```

<h3 align="center">3. 📂 Importe o uuid no seu projeto</h3>

Depois de instalar, adicione esta linha no início do seu arquivo JavaScript:
```js
const { v4: uuidv4 } = require('uuid');
```
- `require('uuid')`: importa o módulo `uuid`
- `{ v4 }`: extrai a função `v4`, que gera UUIDs aleatórios (versão 4);
- `v4: uuidv4`: renomeia a função para `uuidv4`, para facilitar o uso no seu código

<h3 align="center">4. 🧠 Criando um "banco de dados" simples em memória</h3>

Como ainda não estamos usando um banco de dados real, podemos simular um com um array de objetos. Veja um exemplo:
```js
const pessoas = [
    {"id":uuidv4(),"nome":"João","idade":18},
    {"id":uuidv4(),"nome":"Maria","idade":19}
];
```
Neste caso:
- Cada pessoa é um objeto com `id`, `nome` e `idade`;
- O id é gerado automaticamente com `uuidv4()` e garante que ele seja único.

Esse array pessoas funcionará como nosso banco de dados temporário, armazenado na memória do servidor.

<h3 align="center">5. 📬 Criando POST</h3>

No arquivo `index.js` na raiz do projeto e adicione o seguinte conteúdo:
```js
app.post('/adicionar', (req, res) =>{
    const pessoa = req.body;
    const novoid = uuidv4();
    const novapessoa = {
        "id":novoid,
        "nome":pessoa.nome,
        "idade":pessoa.idade
    };
    pessoas.push(novapessoa);
    res.status(201).json(novapessoa);
})
```

<h4>🔍 Explicação linha por linha:</h4>

```js
app.post('/adicionar', (req, res) =>{
```

- `app.post(...)`: cria uma rota que responde requisições do tipo `POST`
- `'/adicionar'`: é o caminho da URL (neste caso, `http://localhost:3000/adicionar`)
- `(req, res) => { ... }`: função que será executada quando essa rota for acessada
    - `req`: Objeto da requisição (informações que o cliente envia)
    - `res`: Objeto da resposta (usado para enviar dados de volta)

```js
const pessoa = req.body;
```

- Extrai o corpo da requisição (que deve estar em `JSON`) e armazena na variável `pessoa`.
- Espera-se que o corpo tenha algo como:
```json
{
  "nome": "João",
  "idade": 30
}
```
```js
const novoid = uuidv4();
```
- Gera um UUID (identificador único) usando a função `uuidv4()`.

```js
const novapessoa = {
   "id":novoid,
   "nome":pessoa.nome,
   "idade":pessoa.idade
};
```
- Cria um novo objeto com os dados da pessoa:
  - Um `id` gerado automaticamente.
  - O `nome` e `idade` enviados na requisição.
- Isso forma a "nova pessoa" que será salva no "banco de dados" (em memória).

```js
pessoas.push(novapessoa);
```
- Adiciona a nova pessoa ao array pessoas.

```js
res.status(201).json(novaPessoa);
```
- Envia uma resposta HTTP com:
  - Status **201**: indica que um recurso foi criado com sucesso.
  - `JSON` no corpo: retorna o objeto da nova pessoa para o cliente, confirmando o que foi salvo.

<h3 align="center">6. 📝 Criando PUT</h3>

No arquivo `index.js` na raiz do projeto e adicione o seguinte conteúdo:
```js
app.put('/atualizar/:id', (req, res) =>{
    const ID = req.params.id;
    const pessoa = req.body;
    const index = pessoas.findIndex(p => p.id === ID);
    pessoas[index] = {
        "id":ID,
        "nome":pessoa.nome,
        "idade":pessoa.idade
    };
    res.status(204).end();
});
```

<h4>🔍 Explicação linha por linha:</h4>

```js
app.put('/atualizar/:id', (req, res) =>{
```

- `app.put(...)`: cria uma rota que responde requisições do tipo `PUT`
- `'/atualizar/:id'`: é o caminho da URL (neste caso, `http://localhost:3000/atualizar/35703195-aa3f-4260-a14a-e4e57af13d28`)
    - O `:id` é chamado de parâmetro de rota.
    - Ele cria uma chave chamada `id` que pode ser acessada
- `(req, res) => { ... }`: função que será executada quando essa rota for acessada
    - `req`: Objeto da requisição (informações que o cliente envia)
    - `res`: Objeto da resposta (usado para enviar dados de volta)

```js
const ID = req.params.id;
```
- Pega o valor do parâmetro `id` enviado na URL.
- Exemplo: se a **URL** for `/atualizar/abc123`, então `ID = "abc123"`.

```js
const pessoa = req.body;
```
- Lê o corpo da requisição, que deve conter os novos dados da pessoa.

```js
const index = pessoas.findIndex(p => p.id === ID);
```
- Procura no array pessoas a posição (índice) da pessoa cujo `id` seja igual ao `ID` recebido na URL.

```js
pessoas[index] = {
    "id": ID,
    "nome": pessoa.nome,
    "idade": pessoa.idade
};
```
- Substitui os dados da pessoa no array pela nova versão atualizada.
- Mantém o mesmo `id`, mas atualiza `nome` e `idade` com os dados recebidos.

```js
res.status(204).end();
```
- Envia uma resposta com status **204**, que significa:
  - ✅ Atualização feita com sucesso
  - 🚫 Sem conteúdo no corpo da resposta
- `.end()` finaliza a resposta sem enviar mais nada.

<h3 align="center">7. 🔍 Criando GET</h3>

No arquivo `index.js` na raiz do projeto e adicione o seguinte conteúdo:
```js
app.get('/pessoa/:id', (req, res) => {
    const ID = req.params.id
    const index = pessoas.findIndex(p => p.id === ID);
    res.send(pessoas[index]);
});
```

<h4>🔍 Explicação linha por linha:</h4>

```js
app.get('/pessoa/:id', (req, res) => {
```
- `app.get(...)`: cria uma rota que responde requisições do tipo `GET`
- `'/pessoa/:id'`: é o caminho da URL (neste caso, `http://localhost:3000/pessoa/35703195-aa3f-4260-a14a-e4e57af13d28`)
    - O `:id` é chamado de parâmetro de rota.
    - Ele cria uma chave chamada `id` que pode ser acessada
- `(req, res) => { ... }`: função que será executada quando essa rota for acessada
    - `req`: Objeto da requisição (informações que o cliente envia)
    - `res`: Objeto da resposta (usado para enviar dados de volta)

```js
const ID = req.params.id
```
- Pega o valor do parâmetro `id` enviado na URL.
- Exemplo: se a **URL** for `/atualizar/abc123`, então `ID = "abc123"`.

```js
const index = pessoas.findIndex(p => p.id === ID);
```
- Procura no array pessoas a posição (índice) da pessoa cujo `id` seja igual ao `ID` recebido na URL.

```js
res.send(pessoas[index]);
```
- Envia a pessoa encontrada como resposta da requisição.

<h3 align="center">8. 🗑️ Criando DELETE</h3>

No arquivo `index.js` na raiz do projeto e adicione o seguinte conteúdo:
```js
app.delete('/deletar/:id', (req, res) =>{
    const ID = req.params.id;
    const index = pessoas.findIndex(p => p.id === ID);
    pessoas.splice(index, 1);
    res.status(204).end();
})
```

<h4>🔍 Explicação linha por linha:</h4>

```js
app.delete('/deletar/:id', (req, res) =>{
```
- `app.delete(...)`: cria uma rota que responde requisições do tipo `DELETE`
- `'/deletar/:id'`: é o caminho da URL (neste caso, `http://localhost:3000/deletar/35703195-aa3f-4260-a14a-e4e57af13d28`)
    - O `:id` é chamado de parâmetro de rota.
    - Ele cria uma chave chamada `id` que pode ser acessada
- `(req, res) => { ... }`: função que será executada quando essa rota for acessada
    - `req`: Objeto da requisição (informações que o cliente envia)
    - `res`: Objeto da resposta (usado para enviar dados de volta)

```js
const ID = req.params.id
```
- Pega o valor do parâmetro `id` enviado na URL.
- Exemplo: se a **URL** for `/atualizar/abc123`, então `ID = "abc123"`.

```js
const index = pessoas.findIndex(p => p.id === ID);
```
- Procura no array pessoas a posição (índice) da pessoa cujo `id` seja igual ao `ID` recebido na URL.

```js
pessoas.splice(index, 1);
```
- Remove um item do array `pessoas` na posição index.
- `splice(index, 1)` significa: "remova 1 item a partir do índice X".

```js
res.status(204).end();
```
- Envia uma resposta com status **204**, que significa:
  - ✅ Atualização feita com sucesso
  - 🚫 Sem conteúdo no corpo da resposta
- `.end()` finaliza a resposta sem enviar mais nada.


