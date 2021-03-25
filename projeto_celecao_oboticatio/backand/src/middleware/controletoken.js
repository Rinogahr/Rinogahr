const jwt = require('jsonwebtoken');
const {JWP_KEY} = require("../../config")
const tokenNumberserver = 'ZXPURQOARHiMc6Y0flhRC1LVlZQVFRnm';

exports.obrigatorio = (req, res, next)=>{

    try {
        
        const  decode = jwt.verify(req.params.token || req.body.token || req.headers.token || req.query.token,JWP_KEY);
       
        req.token = decode;
        next();
    } catch (error) {
        return res.status(401).json({
            mensagem:'falha na autenticação',
            error:'token errado ou não informado'+error
        });
    }
    

}

exports.opcional = (req, res, next)=>{
    try {
        const token =req.query.token || req.headers.token
        const descodificar = jwt.verify( token, JWP_KEY)
        req.usuario = descodificar;
        next()
    } catch (error) {
        next()
    }
}