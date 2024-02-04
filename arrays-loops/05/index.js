const original = [1, 4, 11, 21, 53, 87, 111];
let pares = [];

for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 === 0) {
        pares.push(original[i]);

    }
}

console.log(pares);