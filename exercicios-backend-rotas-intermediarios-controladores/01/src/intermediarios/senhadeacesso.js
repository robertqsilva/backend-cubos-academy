
const validandosenha = (req, res, next) => {
    const {senha} = req.query
    const senhaCorreta = 'admin0'

    if(!senha){
       return res.send("usuario não tem permissão de acesso")
    }

    if(senha !== senhaCorreta){
        return res.send('senha de acesso incorreta')
    }

    next()
}

module.exports = {
    validandosenha
}