const express = require('express');
const db = require('./db');
const app = express();
app.use(express.json());
const port = 3000;

let Empresa = [];

app.post('/inserir/funcionario', (req, res) => {
    const { nome, sobrenome, cargo} = req.body;
   
    db.query(
        `INSERT INTO funcionario (nome, sobrenome, cargo) VALUES (?, ?, ?)`,
        [nome, sobrenome, cargo],
        function (err, results, fields) {
          if (err) {
            console.error('Erro na inserção:', err);
            return;
          }
          console.log(results);
          console.log(fields);
        }
      );
    res.send(`funcionario inserido!\n\nnome: ${nome} \nsobrenome: ${sobrenome} \ncargo: ${cargo}`);
});


app.post('/inserir/cargo', (req, res) => {
    const {  cargo , dep} = req.body;
   
    db.query(
        `INSERT INTO cargo ( cargo, dep) VALUES (?, ?)`,
        [ cargo ,dep],
        function (err, results, fields) {
          if (err) {
            console.error('Erro na inserção:', err);
            return;
          }
          console.log(results);
          console.log(fields);
        }
      );
    res.send(`cargo inserido! \ndepartamento: ${dep} \ncargo: ${cargo}`);
});

app.get('/funcionario', (req, res) => {
    db.query(
      `SELECT * FROM funcionario`,
      function (err, results, fields) {
        if (err) {
          console.error('Erro na consulta:', err);
          return res.status(500).json({ error: 'Erro ao consultar a pessoa' });
        }
        return res.json(results);
      }
    );
  });

  app.put('/atualizar/:id', (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome,agencia} = req.body;

    db.query(
        `UPDATE pessoa SET nome = ?, sobrenome = ?, agencia = ? WHERE id = ?`,
        [nome, sobrenome, cargo, agencia, id],
        function(err, results, fields) {
            if (err) {
                console.error('Erro na consulta:', err);
                return res.status(500).json({ error: 'Erro ao consultar a pessoa' });
            }

            res.send(`pessoa atualizado!\n${id}\nnome: ${nome} \nsobrenome: ${sobrenome} \nagencia: ${agencia}`)
        }
    );
});

app.delete('/deletar/id/:id', (req, res) => {
    const { id } = req.params;
    const {nome , sobrenome , agencia} = req.body;
    db.query(
        `DELETE FROM funcionario WHERE ID = ?`,
        [id],
        function(err,results,fields){
            if(err){
                console.error('Erro para deletar',err);
                return res.status(500).json({error:'Erro para deletar'})
            }
            return res.json(results)
        }
        
    )
});

app.get('/funcionario/:id', (req, res) => {
    const {id} = req.params;
    const {nome,sobrenome,agencia} = req.params;
    db.query(
        `SELECT * FROM funcionario where id = ?`,
        [id],
        `SELECT * FROM funcionario where nome = ?`,
        [nome],
        `SELECT * FROM funcionario where sobrenome = ?`,
        [sobrenome],
        `SELECT * FROM funcionario where agencia = ?`,
        [agencia],

        function(err,results,fields){
            if(err){
                console.error('erro para puxar',err);
                return res.status(500).json({error:'Erro para puxar'})
            }
            return res.json(results)
        }
    )
});
app.get('/departamento/:id', (req, res) => {
    const {id} = req.params;
    db.query(
        `SELECT * FROM departamento where id = ?`,
        [id],
        function(err,results,fields){
            if(err){
                console.error('erro para puxar',err);
                return res.status(500).json({error:'Erro para puxar'})
            }
            return res.json(results)
        }
    )
});

app.get('/cargo/:id', (req, res) => {
    const {id} = req.params;
    const {cargo, departamento} = req.params;
    db.query(
        `SELECT * FROM departamento where id = ?`,
        [id],
        `SELECT * FROM departamento where cargo = ?`,
        [cargo],
        `SELECT * FROM departamento where departamento = ?`,
        [departamento],

        function(err,results,fields){
            if(err){
                console.error('erro para puxar',err);
                return res.status(500).json({error:'Erro para puxar'})
            }
            return res.json(results)
        }
    )
});
app.get('/cargo/departamento/:departamento', (req, res) => {
    const {cargo, departamento} = req.params;
    db.query(
        
        `SELECT * FROM departamento where departamento = ?`,
        [departamento],

        function(err,results,fields){
            if(err){
                console.error('erro para puxar',err);
                return res.status(500).json({error:'Erro para puxar'})
            }
            return res.json(results)
        }
    )
});

app.get('/funcionario/nome/:nome', (req, res) => {
    const {nome, sobrenome, cargo} = req.params;
    
    db.query(
        
        `SELECT * FROM funcionario where nome = ?`,
        [nome],
        
        `SELECT * FROM funcionario where funcionario = ?`,
        [sobrenome],
        
        `SELECT * FROM funcionario where funcionario = ?`,
        [cargo],

        function(err,results,fields){
            if(err  ){
                console.error('erro para puxar',err);
                return res.status(500).json({error:'Erro para puxar'})
            }
            return res.json(results)
        }
    )
});

app.put('/atualizar/funcionario/:funcionario/cargo/:cargo/departamento/:departamento', (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome,agencia, cargo,departamento} = req.body;

    db.query(
        `UPDATE pessoa SET nome = ?, sobrenome = ?, agencia = ?,cargo = ?, departamento = ? WHERE id = ?`,
        [nome, sobrenome, cargo, agencia, id, departamento],
        function(err, results, fields) {
            if (err) {
                console.error('Erro na consulta:', err);
                return res.status(500).json({ error: 'Erro ao consultar a pessoa' });
            }

            res.send(` atualizado!\n${id}\nnome: ${nome} \nsobrenome: ${sobrenome} \nagencia: ${agencia}\ncargo${cargo},\ndepartamento${departamento}`)
        }
    );
});

app.put('/deletar/funcionario/:funcionario/cargo/:cargo/departamento/:departamento', (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome,agencia, cargo,departamento} = req.body;

    db.query(
        `UPDATE pessoa SET nome = ?, sobrenome = ?, agencia = ?,cargo = ?, departamento = ? WHERE id = ?`,
        [nome, sobrenome, cargo, agencia, id, departamento],
        function(err, results, fields) {
            if (err) {
                console.error('Erro na consulta:', err);
                return res.status(500).json({ error: 'Erro ao consultar a pessoa' });
            }

            res.send(` atualizado!\n${id}\nnome: ${nome} \nsobrenome: ${sobrenome} \nagencia: ${agencia}\ncargo${cargo},\ndepartamento${departamento}`)
        }
    );
});





app.post('/cadastrar', (req, res)=>{
    const {nome, sobrenome, agencia } = req.body;
    personlist.push({nome, sobrenome, agencia})
    res.send(`Usuário recebido!!${nome}`)
})

app.post('/cadastrar/cargo', (req, res)=>{
    const {nome,departamento} = req.body;
    const {id} = req.body;
    personlist.push({nome,departamento,id})
    res.send(`Usuário recebido!!${nome}, `)
})
app.post('/cadastrar/departamento', (req, res)=>{
    const {nome, departamento} = req.body;
    const {id} = req.body;
    personlist.push({nome, departamento, id})
    res.send(`Usuário recebido!!${nome}, id recebido!!${id},Departamento recebido!!${departamento}`)
})

app.listen(port, () => {
    console.log(`Server listening on  http://localhost:${port}`);
});




