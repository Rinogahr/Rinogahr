const { query } = require('express');
const {querySync} = require('../conectorbd/mysql');

exports.cadastro =  async(req, res, next)=>{
    try {
        const {nome, email, cpf, login, senha} = req.body;

        if( (!nome) || (!cpf) || (!email) || (!senha) ){return res.json({error:'parametros necessarios {nome, email, cpf, senha'})}
        
        const cadastro = await querySync(`INSERT INTO revendedor (nome, email, cpf, login, senha)
        VALUES (?,?,?,?,?);`,[nome, email, cpf, login, senha]);
        if(cadastro.affectedRows == 1){
            res.json({mensagem:'gravado com sucesso!',result:cadastro,status:true})
        }else{
            res.json({mensagem:'não foi gravado',result:cadastro,status:false})
        }
        res.send(cadastro)
    } catch (error) {
        res.send(error)
    }
}