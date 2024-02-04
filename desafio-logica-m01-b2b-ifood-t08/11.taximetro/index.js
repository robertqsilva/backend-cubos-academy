function solucao(min, km) {
  const valorPorMin = 50;
  const limiteInicialmin = 20;
  const valorAddMin = 30;

  const valorPorKm = 70;
  const limiteInicialKm = 10;
  const valorAddKm = 50;

  function calculandoValor(
    unidadeDeMedida,
    limiteInicial,
    valorPorUnidade,
    valorAdicional
  ) {
    //funçao criada para evitar repeticao de codigo, sendo assim nao sera nescessario repetir a logica para caluclar o valor do min e do km, apenas chamando a funcao e passando os argumentos corretos.
    if (unidadeDeMedida > limiteInicial) {
      const qntdAdicional = unidadeDeMedida - limiteInicial;
      const valorComAdcional =
        unidadeDeMedida * valorPorUnidade -
        qntdAdicional * valorPorUnidade +
        qntdAdicional * valorAdicional;
      return valorComAdcional;
    }
    const valorSemAdcional = unidadeDeMedida * valorPorUnidade;
    return valorSemAdcional;
  }

  const valorTotalDaCorrida =
    calculandoValor(min, limiteInicialmin, valorPorMin, valorAddMin) +
    calculandoValor(km, limiteInicialKm, valorPorKm, valorAddKm);

  console.log(Math.floor(valorTotalDaCorrida));
}
