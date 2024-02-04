

const somarNumeros = (req, res) => {
    const {num1} = req.query
    const {num2} = req.query

    const resultado = Number(num1) + Number(num2)
    res.send(resultado.toString())
}

const subtrairNumeros = (req, res) => {
    const {num1} = req.query
    const {num2} = req.query

    const resultado = Number(num1) - Number(num2)
    res.send(resultado.toString())
}

const multiplicarNumeros = (req, res) => {
    const {num1} = req.query
    const {num2} = req.query

    const resultado = Number(num1) * Number(num2)
    res.send(resultado.toString())
}

const dividirNumeros = (req, res) => {
    const {num1} = req.query
    const {num2} = req.query

    if(num2 === '0'){
        res.send('a divisao por zero é indefinida')
    }

    if(!num1 || !num2){
        res.send('Adicione valores para que a opração seja feita')
    }

    const resultado = Number(num1) / Number(num2)
    res.send(resultado.toString())
}

module.exports = {
    somarNumeros, 
    subtrairNumeros,
    multiplicarNumeros,
    dividirNumeros
} 