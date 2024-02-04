
const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "A Montanha Mágica";

console.log(test(livros, nomeDoLivro));

function test(arrayDelivros, nomeDoLivro) {
    const resultado = arrayDelivros.findIndex((livro) => {
        const posicaoDoindex = livro === nomeDoLivro
        return posicaoDoindex
    })

    if (resultado !== -1) {
        return (resultado + 1);
    } else {
        return 'Livro não encontrado'
    }

}



