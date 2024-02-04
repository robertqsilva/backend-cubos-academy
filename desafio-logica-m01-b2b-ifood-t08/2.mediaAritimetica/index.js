
function solucao(lista) {
    const calculandoTotal = lista.reduce((acumulado, valorAtual) => acumulado + valorAtual, 0)
    const calculandoMedia = calculandoTotal / lista.length
    console.log(calculandoMedia)
}