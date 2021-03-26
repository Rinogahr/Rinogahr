const router = require("express").Router();
const { cadastro } = require("../servico_rotas/rev_sevice");
const { obrigatorio } = require("../middleware/controletoken");

// revendedor/cad  GRAVAR UM NOVO REVENDEDOR CAPTURE OS PARAMETROS ( nome, email, cpf, login, senha ) EM JSON
router.post('/cad', obrigatorio, cadastro);

module.exports = router;