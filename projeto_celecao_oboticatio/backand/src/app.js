const express = require("express");
const path = require("path");
const app = express();



const login = require("./rotas/usuariorota");


app.use('/login',login);



// app.get("/", function( req, res){
//     res.send("BEM VINDO AO PROJETO OBOTICARIO INFORME SEU LOGIN E SENHA")
// })

// app.get("/cad", function( req, res){
//     res.send("CRIE SEU CADASTRO")
// })

// app.get("/home", function( req, res){
//     res.send('Bem vindo a tela de home')
// })

// app.get("/produto", function( req, res){
//     res.send("AQUI É O CADASTRO DE PRODUTO")
// })

app.use('/',express.static('frontand'))
app.all('/*',(req,res) =>{
    res.sendFile( path.join( __dirname, '..','frontand', 'index.html' ) );
})

//tratamento de erro
app.use((req, res, next)=>{

    res.send('ROTA NÃO EXISTE')
 })


console.log("Conectado");

app.listen(8081);