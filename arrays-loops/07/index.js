const nomes = ["Ana", "Joana", "carlos", "amanda"];
let amarzena = [];

for (let i = 0; i < nomes.length; i++) {

    if (nomes[i][0] == "A" || nomes[i][0] == "a") {
        amarzena.push(nomes[i]);
    }
}

console.log(amarzena)