const router = require("express").Router();
const userota = require("../servico_rotas/login");
const { opcional } = require("../middleware/controletoken");

//login
router.get('/', opcional, userota.login);

module.exports = router;