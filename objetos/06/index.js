const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const adutos = []
const jovens = []


for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idade > 17) {
        adutos.push(usuarios[i])

    } else {
        jovens.push(usuarios[i])

    }
}

console.log(jovens);
console.log(adutos);