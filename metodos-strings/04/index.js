let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

// Formatando o id 
const idConfigurado = identificador.padStart(6, 0)
console.log(idConfigurado)

// Formatando o nome
const arrayDoNome = nome.split(" ")
let nomeModificado = ""

for (let i = 0; i < arrayDoNome.length; i++) {
    let inicial = arrayDoNome[i][0].toUpperCase()
    nomeModificado += `${inicial}${arrayDoNome[i].slice(1).toLowerCase()} `
}
console.log(nomeModificado.trim())

// Formatando o email
let emailConfigurado = email.trim()
console.log(emailConfigurado)
