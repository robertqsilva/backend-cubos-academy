const express = require('express')
const {listarConvidados, adicionarConvidado, removendoConvidado} = require('../controladores/convidados')
const router = express()


router.get('/convidados', listarConvidados)
router.post('/convidados', adicionarConvidado)
router.delete('/convidados/:nome', removendoConvidado)



module.exports = router