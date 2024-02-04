const texto = "Aprenda programar do zero na Cubos Academy";
const arrayDotexto = texto.split(" ")
let url = ""

for (let i = 0; i < arrayDotexto.length; i++) {
    url += `${arrayDotexto[i].toLowerCase()}-`
}
console.log(url.slice(0, -1))