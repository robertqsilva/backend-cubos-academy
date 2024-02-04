
function verificarTextoProibido(texto) {
    const arrayDeVrificação = texto.split(" ")

    for (let i = 0; i < arrayDeVrificação.length; i++) {
        const palavrasProibida = "covid"
        const palavrasProibida1 = "pandemia"


        if (arrayDeVrificação[i].toLowerCase() === palavrasProibida || arrayDeVrificação[i].toLowerCase() === palavrasProibida1) {
            return 'Comentário bloqueado por conter palavras proibidas'
        }
    }
    return 'Comentário autorizado'
}


const comentario = "Esse é muito CoViD perigoso! ";
console.log(verificarTextoProibido(comentario))