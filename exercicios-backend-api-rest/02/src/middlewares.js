const validasenha = (req, res, next) => {
    const {senha} = req.query
    const senhaValida = "dev123"

    if(!senha){
        return res.status(401).json({mensagem: "Usuario Nao tem acesso"})
    }

    if(senha !== senhaValida){
    return res.status(401).json({mensagem: "Senha invalida"})
    }

    next()
}

module.exports = validasenha