
const { v4: uuidv4 } = require('uuid'); // Importa o uuid e renomeia como uuidv4
const express = require('express');     // Importa o Express
const app = express();                  // Cria uma instância do servidor
const PORT = 3000;                      // Porta onde o servidor vai rodar
app.use(express.json());                // Habilita o uso de JSON no corpo das requisições


// "Banco de dados" em memória
const pessoas = [
    {"id":uuidv4(),"nome":"João","idade":18},
    {"id":uuidv4(),"nome":"Maria","idade":19}
];

// Rota GET principal
app.get('/', (req, res) => {
  res.send(pessoas);
});

// Rota GET ( pessoa específica )
app.get('/pessoa/:id', (req, res) => {
    const ID = req.params.id
    const index = pessoas.findIndex(p => p.id === ID);
    res.send(pessoas[index]);
});

// Rota POST
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
});

// Rota PUT
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

// Rota DELETE
app.delete('/deletar/:id', (req, res) =>{
    const ID = req.params.id;
    const index = pessoas.findIndex(p => p.id === ID);
    pessoas.splice(index, 1);
    res.status(204).end();
})

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
