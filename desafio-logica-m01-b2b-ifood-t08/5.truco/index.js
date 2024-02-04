function solucao(carta) {
    const manilhasDasCartas = { 'Q': 'J', 'J': 'K', 'K': 'A', 'A': '2', '2': '3', '3': 'Q' }
    const cartaForte = manilhasDasCartas[carta]
    console.log(cartaForte)
}