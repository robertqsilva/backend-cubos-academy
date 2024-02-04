
function corrigitProva(prova) {
    let acertos = 0
    for (let i = 0; i < prova.questoes.length; i++) {
        if (prova.questoes[i].resposta === prova.questoes[i].correta) {
            acertos++
        }
    }
    const nota = (prova.valor / prova.questoes.length) * acertos
    console.log(`o aluno(a) ${prova.aluno} acertou ${acertos} questoes e obteve nota ${nota}`)
}


const prova1 = {
    aluno: "Robert",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "a"
        },
        {
            resposta: "a",
            correta: "a"
        },
        {
            resposta: "e",
            correta: "e"
        },
        {
            resposta: "c",
            correta: "b"
        },
        {
            resposta: "e",
            correta: "e"
        }
    ]
};

corrigitProva(prova1)