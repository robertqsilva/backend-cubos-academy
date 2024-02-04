
const validandoSenha = (req, res, next) =>{
    const senhaValida = "Cubos123"
    const {senha} = req.query

    if(!senha){
        res.status(401).json({ mensagem: 'Unauthorized - não autorizado'})
    }

    if(senha !== senhaValida){
        res.status(401).json({ mensagem: 'Senha incorreta - usuario não autorizado'})
    }
    next()
}

module.exports = validandoSenha