//valor do produto comprado.
const valorDoProduto = 2000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let valoDaParcela = valorDoProduto / quantidadeDoParcelamento;
let qntParcela = (valorDoProduto - valorPago) / valoDaParcela
console.log(`Restam ${qntParcela} parcelas de R$ ${valoDaParcela}`)