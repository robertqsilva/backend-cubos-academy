
function solucao(lista) {
    const somandoNumeros = lista.reduce((acumulado, valorAtual) => acumulado + valorAtual, 0)
    console.log(somandoNumeros)
}