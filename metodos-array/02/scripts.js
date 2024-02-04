
function dividindoGrupos(nomes, tamanho) {
    const numeroDegrupos = Math.ceil(nomes.length / tamanho) //definindo quantos grupos havera

    for (let i = 0; i < numeroDegrupos; i++) {
        const grupoPrimario = i * tamanho // definido index aonde vai comecar cada grupo
        const grupoFinal = grupoPrimario + tamanho // definido o index aonde havera o corte do meu grupo 
        const participantes = nomes.slice(grupoPrimario, grupoFinal) //definidos os participantes do grupo
        console.log(`Grupo ${i + 1}: ${participantes.join(", ")}`) // logando na tela
    }


}

const nomes = ['Juninho', 'Vidal', 'Dani', 'Ruli', 'Diego'];
let tamanhoDoGrupo = 3;

dividindoGrupos(nomes, tamanhoDoGrupo)