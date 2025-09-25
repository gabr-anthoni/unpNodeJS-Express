const express = require('express'); // Importa o Express
const app = express();              // Cria uma instância do servidor
const port = 3000;                  // Porta onde o servidor vai rodar

// Rota GET principal
app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
