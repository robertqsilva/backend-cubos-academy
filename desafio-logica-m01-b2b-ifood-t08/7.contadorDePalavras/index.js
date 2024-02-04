function solucao(texto) {
    const condicao = (texto === "") ? 0 : texto.trim().split(" ").filter(palavra => palavra !== "")
    const qntdDepalavras = condicao.length
    console.log(qntdDepalavras)
}
