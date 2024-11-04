const express = require('express');
const db = require('./db');
const app = express();
app.use(express.json());
const port = 3000;

let Academia = [];

app.post('/inserir/cliente', (req, res) => {
    const { nome, email, cpf} = req.body;
   
    db.query(
        `INSERT INTO cliente (nome, email, cpf) VALUES (?, ?, ?)`,
        [nome, email, cpf],
        function (err, results, fields) {
          if (err) {
            console.error('Erro na inserção:', err);
            return;
          }
          console.log(results);
          console.log(fields);
        }
      );
    res.send(`cliente inserido!\n\nnome: ${nome} \nemail: ${email} \ncpf: ${cpf}`);
});