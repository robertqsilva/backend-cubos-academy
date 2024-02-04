function solucao(lista) {
    lista.sort((a,b) => a-b) //ordenando array de forma crescente
    const menorParticipante = lista.find((idade) => idade > 17)
    const condicao = (menorParticipante === undefined) ? "CRESCA E APARECA" : menorParticipante
    console.log(condicao)
 
}
