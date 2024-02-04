const valorDisponivel = 80;
const precoDoTenis = 129.99;

const desconto = precoDoTenis - valorDisponivel;

const percentual = (desconto * 100) / precoDoTenis;

console.log(`Desconto será de ${percentual}%`)