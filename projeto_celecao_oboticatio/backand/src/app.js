const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const path = require('path')

const app = express();
var door = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// app.use('/portal/',express.static('frontend'));
// app.use ('portal/ *', (req, res) => {
//     res.sendFile (path.join ( root, '/portaldev/'));
// })




const Login = require("./rotas/usuariorota");
const rv = require("./rotas/rota_teste");
const CadastroRevendedor = require("./rotas/rev_rotas")


app.use("/login",Login);
app.use("/teste",rv);
app.use("/revendedor",CadastroRevendedor);




//tratamento de erro
app.use((req, res, next)=>{

   res.send('ROTA NÃO EXISTE')
})



app.listen( door, function(){
    console.log("Conectado na porta -> "+door);
})

module.exports = app;