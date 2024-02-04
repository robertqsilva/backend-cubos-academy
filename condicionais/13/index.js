//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;


if (tipoDePagamento === "credito") {
    const valorFinal = valorDoProduto - (valorDoProduto * 5 / 100);
    console.log('Valor a ser pago: ', (valorFinal / 100).toFixed(2));

} else if (tipoDePagamento === "cheque") {
    const valorFinal = valorDoProduto - (valorDoProduto * 3 / 100);
    console.log('Valor a ser pago: ', (valorFinal / 100).toFixed(2));

} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    const valorFinal = valorDoProduto - (valorDoProduto * 10 / 100);
    console.log('Valor a ser pago: ', (valorFinal / 100).toFixed(2));

} else {
    console.log('Não é um pagamento valido');
}


