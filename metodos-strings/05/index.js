function ocultarNumeroCartaoImpl(numeroCartao) {
    if (numeroCartao.length < 9) {
        return "Número de cartão inválido! O número deve conter pelo menos 9 dígitos.";
    }
    const exp = /[^0-9]/
    if (exp.test(numeroCartao)) {
        return 'Número de cartão inválido! O número deve conter apenas dígitos numéricos.'
    }

    const primeiros4Digitos = numeroCartao.slice(0, 4);
    const ultimos4digitos = numeroCartao.slice(-4);

    const quantidadeCaracteresOcultos = numeroCartao.length - ultimos4digitos.length - primeiros4Digitos.length;
    const ocultados = "*".repeat(quantidadeCaracteresOcultos);

    const numeorOcultado = `${primeiros4Digitos}${ocultados}${ultimos4digitos}`;
    return numeorOcultado;
}


module.exports = ocultarNumeroCartaoImpl;