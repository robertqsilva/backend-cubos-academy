const letras = ["A", "a", "B", "C", "E", "e"];
let letrasE = 0;

for (let i = 0; i < letras.length; i++) {

    if (letras[i] === "e" || letras[i] === "E") {
        letrasE++;
    }

}

if (letrasE > 0) {
    console.log(`Foram encontradas ${letrasE} letras "E" ou "e".`)
} else {
    console.log('Nenhuma letra "E" ou "e" foi encontrada')
}