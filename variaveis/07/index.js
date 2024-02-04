const populaçãoInfectada = 1000;
const txDeTrasmissao = 4;
const tempo = 7;

const formula = populaçãoInfectada * (txDeTrasmissao ** (tempo / 7));
const resultado = formula;

console.log(`População infectada séra de ${resultado} pessoas`);