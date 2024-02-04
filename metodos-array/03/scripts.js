//  Crie uma função que receba dois parâmetros, o primeiro sendo um array de carros e o segundo um número inteiro. A função deverá encontrar o /carro na posição informada no segundo parâmetro e capturar 3 carros subsequentes incluindo o que foi encontrado na posição informada. A função deve imprimir o resultado.

function localizarCarro(nomes, posicao) {
    const listaDeCarros = nomes.slice(posicao, posicao + 3)
    const ListaArrumada = listaDeCarros.join(" - ")
    console.log(ListaArrumada)

}

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

localizarCarro(nomes, posicao)
