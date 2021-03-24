//CONEXÃO COM BANCO DE DADOS MYSQL
const mysql = require("mysql");
require('dotenv').config();

const HOST = process.env.BD_HOST || 'localhost';
const USER = process.env.BD_USER || 'digital';
const PASSWORD = process.env.BD_PASSWORD || '0811';
const PORT = Number( process.env.BD_PORT || 3306 );
const DATABASE = process.env.BD_DATABASE || 'oboticario';
const TIMEZONE = process.env.TIMEZONE || 'utc';
const CHARSET = process.env.CHARSET || 'utf8';

const connection = mysql.createConnection({
    host:HOST,
    user:USER,
    password:PASSWORD,
    port:PORT,
    database:DATABASE,
    timezone:TIMEZONE,
    charset:CHARSET,
  });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  connection.query(`SELECT id, nome, email,
  cpf, login, senha, 
  excluir, atualizar 
  FROM revendedor
  WHERE (excluir is null or not excluir)`, function( error,rows,field){
        if(!error){
            console.log(rows);
        }else{
            console.log("erro inesperado"+error)
        }
  });