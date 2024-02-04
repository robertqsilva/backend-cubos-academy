//`Galera... O Carlos está na posição 10, corre lá!`

const quemEuQueroAchar = "João";


const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },

]

for (let i = 0; i < participantes.length; i++) {
    const { nome } = participantes[i]

    if (nome === quemEuQueroAchar) {
        console.log(`Galera... O ${nome} está na posição ${i + 1}, corre lá`)
    }


}