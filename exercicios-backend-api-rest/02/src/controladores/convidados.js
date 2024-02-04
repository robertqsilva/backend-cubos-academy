const convidados = require('../bancodedados')

const listarConvidados = (req, res) => {
    const {nome} = req.query

    if(!nome){
        return res.status(200).json(convidados)
    }

    const convidadoNalista = convidados.find((convidado) => {
        return convidado === nome
    })

    if(!convidadoNalista){
        return res.status(404).json({mensagem: "O convidado buscado não está presente na lista."})
    }

    return res.status(200).json({mensagem: "Convidado na lista"})
    
}


const adicionarConvidado = (req, res) => {
    const {nome} = req.body

    if(!nome){
        return res.status(400).json({mensgaem: "O nome do convidado é obrigatorio"})
    }

    const verificaNomeString = Number(nome)
    if(!isNaN(verificaNomeString)){
        return res.status(400).json({mensagem: "Insisra um nome valido"})
    }

    let temNomesIguais = false
    const verificaNomesIguais = convidados.map((convidado) => {
    
        if(convidado === nome){
            temNomesIguais = true
        }})

    if(temNomesIguais){
        return res.status(404).json({mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."})
    }

    convidados.push(nome)
    return res.status(201).json({mensagem: "Convidado adicionado"})
}

const removendoConvidado = (req, res) => {
    const {nome} = req.params

    const convidadoDeletado = convidados.find((convidado) =>{
        return convidado === nome
    })

    if(!convidadoDeletado){
        return res.status(404).json({mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."})
    }

    const indice = convidados.indexOf(nome)
    convidados.splice(indice,1)
    return res.status(200).json({mensagem: "Convidado removido"})
}




module.exports = {
    listarConvidados,
    adicionarConvidado,
    removendoConvidado
}