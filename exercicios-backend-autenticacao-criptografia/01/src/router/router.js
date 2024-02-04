const express = require("express");
const { cadastraUsuario, loginUsuario } = require("../controllers/usuarios");
const verificarUsuario = require("../middlewares/acessotoken");
const {
  cadastrarPokemon,
  atualizarApelidoPokemon,
  getFullPokemons,
  getUniquePokemon,
  deletePokemon,
} = require("../controllers/pokemons");

const router = express();

router.post("/usuario", cadastraUsuario);
router.post("/usuario/login", loginUsuario);

router.use(verificarUsuario);

router.post("/pokemon", cadastrarPokemon);
router.patch("/pokemon/apelido/:idPokemon", atualizarApelidoPokemon);
router.get("/pokemon/:idPokemon", getUniquePokemon);
router.get("/pokemons", getFullPokemons);
router.delete("/pokemon/:id", deletePokemon);

module.exports = router;
