const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

console.log(encontrandoEndereco(endereços, 00222444));

function encontrandoEndereco(arrayDeenderecos, cepProcurado) {
    const localizacao = arrayDeenderecos.find((endereco) => {
        const { cep } = endereco
        const localizacaoDoCep = cep === cepProcurado
        return localizacaoDoCep
    })
    return localizacao.rua
}

