const express = require('express')
const {exibirLivros, exibirUmlivro, adicionarLivro, substituindoLivro, modificaLivro, removerLivro} = require('../controladores/biblioteca')
const router = express()

router.get('/livros', exibirLivros)
router.get('/livros/:id', exibirUmlivro)
router.post('/livros', adicionarLivro)
router.put('/livros/:id', substituindoLivro)
router.patch('/livros/:id', modificaLivro)
router.delete('/livros/:id', removerLivro)



module.exports = router