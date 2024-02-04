

const verificadoItensProibido = (arrayDeItens) => {
    const palavrasProibidas = ['cerveja', 'vodka'] // itens probidos sempre em minusculo

    const palavrasDoItens = arrayDeItens.some((item) => {
        const itemLower = item.toLowerCase()
        return palavrasProibidas.includes(itemLower)
    })

    if (palavrasDoItens) {
        return 'joão. possui bebida com venda proibida!'
    } else {
        return 'tudo certo, vamos as compras!'
    }

}

const palavras = ["arroz", "feijão", "carne", "Cerveja", "macarrão"]
console.log(verificadoItensProibido(palavras));