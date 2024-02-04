const numeros = [3, 24, 1, 8, 11, 77, 15];
let maiorNumero = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i]
    }
}

console.log(maiorNumero);
