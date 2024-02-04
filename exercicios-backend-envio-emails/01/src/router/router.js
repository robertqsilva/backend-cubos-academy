const {Router} = require('express')
const {cadastroUser} = require('../controllers/cadastro');
const envioEmail = require('../controllers/envio_mail');

const router = Router()

router.post('/cadastro', cadastroUser)
router.post("/email", envioEmail);


module.exports = router

