const inputArray = input.trim().split("\n");
const quantidadeDePessoas = parseInt(inputArray[0]);
const arrayDepessoas = inputArray.slice(1);

function formulaEuclidiana(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
let maiorDistancia = 0;

for (let i = 0; i < quantidadeDePessoas; i++) {
  for (let k = i + 1; k < quantidadeDePessoas; k++) {
    let funcionario1 = arrayDepessoas[i].split(" ").map(parseFloat);
    let funcionario2 = arrayDepessoas[k].split(" ").map(parseFloat);
    const [x1, y1] = funcionario1;
    const [x2, y2] = funcionario2;
    const distancia = formulaEuclidiana(x1, y1, x2, y2);
    if (distancia > maiorDistancia) {
      maiorDistancia = distancia;
    }
  }
}

console.log(maiorDistancia);
