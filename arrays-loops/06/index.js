const numeros = [1, 2, 5, 7, 9, 14, 12, 15];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        soma += numeros[i];
    }
}
console.log(soma);