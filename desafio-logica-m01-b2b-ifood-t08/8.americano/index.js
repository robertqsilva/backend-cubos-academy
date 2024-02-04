function solucao(numeros) {
    const somandoNumeros = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
  
    const posicaoDogoleiro = somandoNumeros % numeros.length;
    const goleiro = posicaoDogoleiro !== 0 ? posicaoDogoleiro : numeros.length;
    console.log(goleiro);
  }
  