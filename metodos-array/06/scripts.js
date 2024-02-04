// Supondo que estamos buscando o pet Max, ao encontrar, o sistema deverá imprimir a mensagem O dono(a) do(a) Max é o(a) João, caso contrário, irá imprimrir Que pena Max, não encontramos seu dono(a).

const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

console.log(encontrarDono(usuarios, "Naninha"))

function encontrarDono(usuarios, nomePet) {
    for (const user of usuarios) {
        const { nome, pets } = user
        for (const dog of pets) {
            if (nomePet === dog) {
                return `O dono(a) do(a) ${nomePet} é o(a) ${nome}`
            }
        }
    }
    return `Que pena ${nomePet}, não encontramos seu dono(a)`

}
