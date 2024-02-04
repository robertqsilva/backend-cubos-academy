const express = require("express");
const app = express();
const router = require('./rotas/router')
const validandoSenha = require('./middlewares')

app.use(validandoSenha)
app.use(router)
app.listen(3000);
