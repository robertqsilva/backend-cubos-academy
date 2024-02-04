
function vericandoString(arrayDepalavras) {
    const vericandoQntdCarac = arrayDepalavras.every((palavra) => {
        const qntdCaracteres = palavra.length <= 5
        return qntdCaracteres
    })
    if (vericandoQntdCarac) {
        return 'array validado'
    } else {
        return 'existe palavra inválida'
    }
}

const palavras = ["livro", "canei", "sol", "carr", "relha"]
console.log(vericandoString(palavras));