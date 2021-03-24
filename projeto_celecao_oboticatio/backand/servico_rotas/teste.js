const { query } = require('express');
const {querySync} = require('../conectorbd/mysql');

exports.revendedor =  async(req, res, next)=>{
    try {
        const revList = await querySync(`select * from revendedor;`)
        res.send(revList)
    } catch (error) {
        res.send(error)
    }
}