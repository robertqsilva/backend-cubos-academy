const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: true,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];
console.log(habilita(usuários))

function habilita(arrayDeusuários) {
    const faixaetaria = arrayDeusuários.filter((usuario) => {
        const { idade } = usuario
        return idade > 17 && idade < 66
    })
    const habilitados = faixaetaria.every((user) => {
        const { habilitado } = user
        return habilitado === true
    })

    if (habilitados) {
        return 'todos passaram no teste'
    } else {
        return 'todos precisam estar habilitados'
    }
}