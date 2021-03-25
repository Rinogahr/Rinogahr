const jwt = require('jsonwebtoken');
const {JWP_KEY} = require('../../config');
const { querySync } = require("../conectorbd/mysql");

//rota de login
exports.login = async( req, res, next) =>{
    try {
        const {login,senha} = req.query;

        const result = await querySync(`SELECT * FROM revendedor
        WHERE login LIKE ?
        AND (senha = password(?))
        AND (excluir is null or not excluir)`[login,senha]);

        if(!login || !senha){
            return res.json({error:"login ou senha não definido como parametro"})
        }
        if(result.length == 0){
            return res.json({
                result: result,
                error:"login ou senha invalida!"
            })
        }
        if(result.length>0){
            const tokenInfo = {
                id: result[0].id,
                nome: result[0].nome,
                email: result[0].email,
                cpf: result[0].cpf,
                login: result[0].login,
                senha: result[0].senha,
                excluir: result[0].excluir,
                atualizar: result[0].atualizar
            }

            const token = jwt.sign({tokenInfo}, JWP_KEY, {expiresIn:"1y"})
            res.send({
                mensagem: "Autenticado",
                token: token,
                result: result
            })
        }
    } catch (error) {
        res.send({error: 'Erro ao se conectar'})
        console.log(error);
    }
}