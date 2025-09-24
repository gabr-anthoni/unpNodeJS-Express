

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


