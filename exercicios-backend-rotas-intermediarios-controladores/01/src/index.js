const express = require('express')
const {somarNumeros,
       subtrairNumeros,
       multiplicarNumeros,
       dividirNumeros} = require('./controladores/operaçoes-matematicas')
const {validandosenha} = require('./intermediarios/senhadeacesso')
const app = express()

app.use(validandosenha)

app.get('/somar', somarNumeros )
app.get('/subtrair', subtrairNumeros)
app.get('/dividir', dividirNumeros)
app.get('/multiplicar', multiplicarNumeros)


app.listen(3000)