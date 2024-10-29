
app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.listen(port, ()=>{
console.log(`Example app listening on port ${port}`)

})

const myArray = [1, 2, 3, 4, 5];



// Pass the removeValue function into the filter function to return the specified value
const x = myArray.filter(removeValue);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);

const express = require('express')
const app = express()

app.use(express.json());

let personlist = []

const port = 3000

const nome = "Thomás"

app.get('/visualizar', (req, res) =>{
    res.send(personlist)
})
personlist.push({nome,age})
res.send
app.get('/', (req, res) =>{
    res.send(nome)
})
app.post('/cadastrar', (req, res)=>{
    const {name, age} = req.body;
    personlist.push({name, age,})
    res.send(`Usuário recebido!!${name}`)
})

app.post('/teste', (req, res)=>{
    const {name, age} = req.body;
    console.log(nome,age)
    res.send("Usuário recebido!!")
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})

console.log("oi")

app.get('/params/:id', (req, res) =>{
const {id} = req.params;
req.send(id)

})
app.delete('/params/:id', (req, res)=>{
const {id} = req.params;
const index = parseInt(id,1)
personlist.splice(index,1)
res.send(`Ususario deletado`)


})

app.put
