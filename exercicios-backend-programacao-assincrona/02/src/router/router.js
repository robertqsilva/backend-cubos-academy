const express = require('express')
const {exibirPokemons, pokemonDetalhes} = require('../controladores/pokemon')
const router = express()

router.get("/pokemons", exibirPokemons)
router.get("/pokemons/:identificador", pokemonDetalhes)


module.exports = router 