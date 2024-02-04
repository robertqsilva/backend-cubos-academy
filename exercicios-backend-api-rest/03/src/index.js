const express = require('express')
const validaSenha = require('./middlewares')
const rotas = require('./router/router')
const app = express()

app.use(express.json())

app.use(rotas)


app.listen(3000)

// https://github.com/IvsonEmidio/stasks
// https://github.com/IvsonEmidio/SOLID-SRP-NODEJS
// https://github.com/IvsonEmidio/backend-test
// https://github.com/IvsonEmidio/Shelfe
// https://blog.cubos.academy/readme-de-projeto-no-github-template-gratuito-de-readme/