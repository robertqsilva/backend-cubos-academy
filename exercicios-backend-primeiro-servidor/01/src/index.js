const express = require("express");
const app = express();

const arrayDePessoas = ["José", "Maria", "João", "Marcos", "Fernanda"];

app.get("/", (req, res) => {
  req = 1;
  res.send(`É a vez de ${arrayDePessoas[req]}`);
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
