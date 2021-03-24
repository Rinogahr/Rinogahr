const router =  require('express').Router()
//const {obrigatorio} = require('../middleware/controletoken')
const {revendedor} = require('../servico_rotas/teste');


//rev

router.get('/', revendedor)

module.exports = router