function processData(input) {
  const arrayInput = input.trim().split("\n");
  const senhaCorreta = arrayInput[0];
  const tentativaDeSenha = arrayInput[1];

  let indiceDasenha = 0;

  for (const letra of tentativaDeSenha) {
    if (letra === senhaCorreta[indiceDasenha]) {
      indiceDasenha++;
    }
  }
  const validacao = indiceDasenha === senhaCorreta.length ? "SIM" : "NAO";
  console.log(validacao);
}
