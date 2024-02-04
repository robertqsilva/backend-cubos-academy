const express = require('express')
const router = require('./router/router')


const app = express()

app.use(express.json())

app.use(router)


const PORT = process.env.PORT || 3000
app.listen(PORT)
