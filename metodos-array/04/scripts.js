
function clinica(pacientes, operacao, nome) {
    if (operacao === "agendar") {
        pacientes.splice(pacientes.length, 0, nome)
        return pacientes

    } else if (operacao === "atender") {
        pacientes.splice(0, 1)
        return pacientes
    }

}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const operacao = "agendar"
const nome = "Robert"

console.log(clinica(pacientes, operacao, nome))




