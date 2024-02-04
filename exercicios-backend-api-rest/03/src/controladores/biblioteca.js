const livros = require('../bancodedados')

const exibirLivros = (req, res) => {
    return res.status(200).json(livros)
}

const exibirUmlivro = (req, res) => {
    const {id} = req.params
    const idNumber = Number(id)

    if(isNaN(idNumber)){
        return res.status(401).json({mensagem : "O valor do parâmetro ID da URL não é um número válido."})
    }

    const livroid = livros.find((livro) => {
        return livro.id === idNumber
    })

    if(!livroid){
        return res.status(404).json({mensagem: "Não existe livro para o ID informado."})
    }

    return res.status(200).json(livroid)
}

const adicionarLivro = (req, res) => {
    const {titulo, ano ,autor, numPaginas} = req.body

    if(!titulo || !ano || !autor || !numPaginas){
        return res.status(400).json({mensagem: "As propriedades Nome, Autor, Ano e numPaginas são obrigatorias"})
    }
    const anoNuber = Number(ano)
    const numPaginasNumber = Number(numPaginas)

    if(isNaN(anoNuber) || isNaN(numPaginasNumber)){
        return res.status(400).json({mensagem: "ano e numPaginas tem que ser um numero"})
    }

    const idNovoLivro = livros[livros.length - 1].id
    const novoLivro = 
        {
            id: idNovoLivro + 1,
            titulo,
            autor,
            ano,
            numPaginas
        }

    livros.push(novoLivro)
    return res.status(201).json(novoLivro)
}

const substituindoLivro = (req, res) => {
    const {id} = req.params
    const {titulo, autor, ano, numPaginas} = req.body

    if(!titulo || !autor || !ano || !numPaginas){
        return res.status(401).json({mensagem: "os parametros titulo, autor, ano e numPaginas são obrigatorios"})
    }

    const idNumber = parseInt(id)

    if(isNaN(id)){
        return res.status(401).json({mensagem: "o id tem que ser um numero"})
    }

    const livroSubstituto = livros.find((livro) => {
        return livro.id === idNumber
    }) 

    if(!livroSubstituto){
        return res.status(404).json({mensagem: `o livro de id ${id} não foi encontrado`})
    }


    const newBook = 
        {
            id: livroSubstituto.id,
            titulo,
            autor,
            ano,
            numPaginas
        }

        const posicao = livros.indexOf(livroSubstituto)
        livros.splice(posicao, 1, newBook)
        res.status(200).json({mensagem: "livro substituido"})
}

const modificaLivro = (req, res) => {
    const {titulo, autor, ano, numPaginas} = req.body
    const {id} = req.params

    if(!titulo && !autor && !ano && !numPaginas){
        return res.status(400).json({mensagem: "não ha nada ha ser modificado"})
    }


    const livroAlterado = livros.find((livro) => {
        return livro.id === parseInt(id)
    })

    if(!livroAlterado){
        return res.status(404).json({mensagem : "livro não encontrado"})
    }

    const newBook = 
        {
            id: livroAlterado.id,
            titulo: titulo ?? livroAlterado.titulo,
            autor: autor ?? livroAlterado.autor,
            ano: ano ?? livroAlterado.ano,
            numPaginas: numPaginas ?? livroAlterado.numPaginas,
        }

        const posicao = livros.indexOf(livroAlterado)
        livros.splice(posicao, 1, newBook)
        return res.status(201).json({mensagem: "livro alterado"})
}

const removerLivro = (req, res) => {
    const {id} = req.params

    const livroRemovido = livros.find((livro) => {
        return livro.id === parseInt(id)
    })

    if(!livroRemovido){
        return res.status(404).json({mensagem: "livro não encontrado"})
    }
    const posicao = livros.indexOf(livroRemovido)
    livros.splice(posicao, 1)
    return res.status(200).json({mensagem: "livro removido"})
}

module.exports = 
    {
        exibirLivros,
        exibirUmlivro,
        adicionarLivro,
        substituindoLivro,
        modificaLivro,
        removerLivro
    }