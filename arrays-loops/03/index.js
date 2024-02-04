const numeros = [54, 22, 14, 87, 284];
let tem = -1

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        tem = i;
        break
    }

}

if (tem === -1) {
    console.log(-1);
} else {
    console.log(tem)
}