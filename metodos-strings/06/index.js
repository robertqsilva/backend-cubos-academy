function formatandoNumero(celular) {
    //verificando se a entrada tem somente numeros
    const exp = /[^0-9]/
    if (exp.test(celular)) {
        return 'Número de celular inválido! O número deve conter apenas dígitos numéricos.'
    }

    // formatando numero que contenho 10 digitos  saida: 0100011122  |  saida: 01 9 0001-1122
    const celularPString = celular.toString()
    if (celularPString.length === 10) {
        const ddd = celularPString.slice(0, 2)
        const numeroP1 = celularPString.slice(2, 6)
        const numeroP2 = celularPString.slice(6)
        const numeroComNove = `${numeroP1}-${numeroP2}`.padStart(12, " 9 ")
        const numeroFormatado = `${ddd}${numeroComNove}`
        return numeroFormatado
    }
    // formatando numero com 9 digtotos entrada:000000000  | saida 0 0000-0000
    if (celularPString.length === 9) {
        const numero9 = celularPString.slice(0, 1)
        const numeroP1 = celularPString.slice(1, 5)
        const numeroP2 = celularPString.slice(5)
        const numeroFormatado = `${numero9} ${numeroP1}-${numeroP2}`
        return numeroFormatado
    }
    //formatando numero com 8 digitos entrada: 00001111 saida: 9 0000-1111
    if (celularPString.length === 8) {
        const numeroP1 = celularPString.slice(0, 4)
        const numeroP2 = celularPString.slice(4)
        const numeroFormatado = `${numeroP1}-${numeroP2}`.padStart(11, "9 ")
        return numeroFormatado
    } else {
        return 'Número de celular inválido! O número deve conter pelo menos 8, 9 ou 12 dígitos.'
    }

}

module.exports = formatandoNumero;
