const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}


const conteudos = [
    {
        Identificador: 1,
        Nome_da_aula: "Introdução a programação"
    },

    {
        Identificador: 2,
        Nome_da_aula: "Variavéis"
    },

    {
        Identificador: 3,
        Nome_da_aula: "Condicionais"
    },

    {
        Identificador: 4,
        Nome_da_aula: "Arrays"
    }

]

curso.aulas = conteudos

console.log(curso)