function solucao(min, max, valores) {
    const apostasPermitidas = valores.filter((numero) => (numero >= min && numero <= max))
    console.log(apostasPermitidas)
}