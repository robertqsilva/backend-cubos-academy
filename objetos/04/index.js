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
        idade: 18,
    },
    {
        nome: "Carlos",
        idade: 18,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idade > 17) {
        usuarios[i].maior_idade = true
    } else {
        usuarios[i].maior_idade = false
    }
}

console.log(usuarios)