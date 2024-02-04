const numeros = [0, 122, 4, 6, 4, 8, 44]
console.log(numerosPares(numeros))

function numerosPares(arrayDenumeros) {
    const pares = arrayDenumeros.every((numero) => {
        return numero % 2 === 0
    })

    if (pares) {
        return 'array valido'
    } else {
        return 'array invalido'
    }
}