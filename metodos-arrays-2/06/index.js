const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]
console.log(fitroCidades(cidades));

function fitroCidades(arrayDecidades) {
    const city = arrayDecidades.filter((cidade) => {
        return cidade.length < 9
    })
    const formatndoCity = city.join(", ")
    return formatndoCity
}