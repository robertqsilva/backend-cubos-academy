function solucao(jogadores) {
    const jogadas0 = jogadores.filter((jogador) => jogador.jogada === 0);
    const jogadas1 = jogadores.filter((jogador) => jogador.jogada === 1);
    const nomeDoganhador =
      jogadas0.length === 1 ? jogadas0[0].nome:
      jogadas1.length === 1 ? jogadas1[0].nome:
      "NIGUÉM"
      
      console.log(nomeDoganhador);
    
  }
  