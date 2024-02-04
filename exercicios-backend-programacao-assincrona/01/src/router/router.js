const express = require('express')
const {listarProdutos, listarUmProduto, calculoFrete} = require("../controladores/produtos-ct")
const router = express()

router.get("/produtos", listarProdutos)
router.get("/produtos/:idProduto", listarUmProduto)
router.get('/produtos/:idProduto/frete/:cep', calculoFrete)

module.exports = router