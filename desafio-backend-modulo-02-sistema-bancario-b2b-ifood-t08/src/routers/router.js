const express = require('express')
const {listacontas, criarContas, atualizarConta, deletarConta, saldo, extrato} = require('../controllers/accounts')
const {depositar, saque, trasferencia} = require('../controllers/transactions')


const router = express()

router.get('/contas', listacontas)
router.post('/contas', criarContas)
router.put('/contas/:numeroConta/usuario', atualizarConta)
router.delete('/contas/:numeroConta', deletarConta)
router.get('/contas/saldo', saldo)
router.get('/contas/extrato', extrato)

router.post('/transacoes/depositar', depositar)
router.post('/transacoes/sacar', saque)
router.post('/transacoes/transferir', trasferencia)

module.exports = router