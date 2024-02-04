function solucao(precos) {
    if (precos.length >= 3) {precos.sort((a, b) => a - b)
      const desconto = precos[0] * 0.5
      const totalComDesconto =
        precos.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0) - desconto
        console.log(totalComDesconto);
    } else {
      const valorFinal = precos.reduce((acumulador, numeroAtual) => acumulador + numeroAtual)
      console.log(valorFinal)
    }
  }