const express = require('express')
const router = require('./rotas/router')
const senhaValida = require('./middlewares')
const app = express()


app.use(express.json())
app.use(senhaValida)
app.use(router)

app.listen(3000)