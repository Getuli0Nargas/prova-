const mysql = require('mysql2');

const connection = mysql.createConnection({
host: 'localhost',
user:'root',
password: 'root',
//n ter mudado o nome do bd
database: 'aula',
})

connection.connect(err =>{
    if(err){
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
}
    console.log('Conectado ao banco de dados');
});

module.exports=connection;