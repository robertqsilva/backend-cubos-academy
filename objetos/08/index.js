const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Lulu"],
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
    {
        nome: "Robert",
        pets: ["hulk", "ariel", "jamal", "jacinto", "manoel"],
    },
]

for (let i = 0; i < usuarios.length; i++) {
    const { nome, pets } = usuarios[i]

    if (pets === 0) {
        console.log(`Sou ${nome} e tenho ${pets.length} pets`)

    } else if (pets === 1) {
        console.log(`sou ${nome} e tenho ${pets.length} pet`)

    } else {
        console.log(`Sou ${nome} e tenho ${pets.length} pets`)

    }
}