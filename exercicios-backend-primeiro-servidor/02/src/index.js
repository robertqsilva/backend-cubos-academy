const express = require("express");
const app = express();

const {
  iniciarConometro,
  situaçãoDoConometro,
  pausarConometro,
  continuarConometro,
  zerarConometro,
} = require("./conometro");

app.get("/", (req, res) => {
  res.send(situaçãoDoConometro());
});

app.get("/iniciar", (req, res) => {
  req = iniciarConometro();
  res.send("conometro iniciado");
});

app.get("/pausar", (req, res) => {
  req = pausarConometro();
  res.send("conometro pausado");
});

app.get("/continuar", (req, res) => {
  req = continuarConometro();
  res.send("conometro continuado");
});

app.get("/zerar", (req, res) => {
  req = zerarConometro();
  res.send("conometro zerado");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
