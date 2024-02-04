const produtos = require("../bancodedados/produtos")
const {getStateFromZipcode} = require('utils-playground')

const listarProdutos = async (req,res) =>{
    return res.status(200).json(produtos)
}


const listarUmProduto = async (req, res) => {
    const {idProduto} = req.params

    const produto = await produtos.find((produto) => {
        return produto.id === parseInt(idProduto)
    })

    if(!produto){
        return res.status(404).json({mensagem: "esse produto não foi encontrado"})
    }

    return res.status(200).json(produto)
}


const calculoFrete = async (req, res) => {
    const {idProduto, cep} = req.params
    

    async function calculandoFrete(listarProdutos, idProduto, porcentagem, cep){
        const estado = await getStateFromZipcode(cep)

        const produto = listarProdutos.find((produto) => {
            return produto.id === parseInt(idProduto)
        })

        const porcetagemFrete = porcentagem
        const frete = produto.valor * porcetagemFrete
    
        const resposta  = {
            produto,
            estado: estado,
            frete: frete
        }
    
        return res.status(200).json(resposta)
    }

    const estado = await getStateFromZipcode(cep)

    if(estado === 'RJ' || estado === "SP"){
        return calculandoFrete(produtos, idProduto, 0.15, cep)
    }

    const estadosFrete10Porcento  = ["BA","SE","AL","PE","PB"]
    const estadosFrete10 = estadosFrete10Porcento.includes(estado)
   
    if(estadosFrete10){
        return calculandoFrete(produtos, idProduto, 0.1, cep)
    }

    return calculandoFrete(produtos, idProduto, 0.12, cep)

    
}





module.exports = {
    listarProdutos,
    listarUmProduto,
    calculoFrete
}