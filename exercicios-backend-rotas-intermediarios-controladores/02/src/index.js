const express = require("express");
const {
  adicionandoJogador,
  mostraJogadores,
  removerJogador,
} = require("./controladores/adicionarjogador");
const app = express();

app.get("/remover", removerJogador);
app.get("/adicionar", adicionandoJogador);
app.get("/", mostraJogadores);

app.listen(8000);
