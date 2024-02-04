
const cpfFormatado = (cpf) => {
    if (cpf.length !== 11) {
        return 'cpf invalido'
    }
    const parte1 = cpf.slice(0, 3)
    const parte2 = cpf.slice(3, 6)
    const parte3 = cpf.slice(6, 9)
    const parte4 = cpf.slice(9)

    cpfAtualizado = `${parte1}.${parte2}.${parte3}-${parte4}`
    return cpfAtualizado
}


const cnpjFormatado = (cnpj) => {
    if (cnpj.length !== 14) {
        return 'cnpj invalido'
    }
    const parte1 = cnpj.slice(0, 2)
    const parte2 = cnpj.slice(2, 5)
    const parte3 = cnpj.slice(5, 8)
    const parte4 = cnpj.slice(8, 12)
    const parte5 = cnpj.slice(12)

    cpfAtualizado = `${parte1}.${parte2}.${parte3}/${parte4}-${parte5}`
    return cpfAtualizado
}


const cpf = "12345678901";
console.log(cpfFormatado(cpf))

const cnpj = "12345678904501";
console.log(cnpjFormatado(cnpj))