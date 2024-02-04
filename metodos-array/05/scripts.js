// O sistema Fila de atendimento que você implementou no exercício 04 desta lista, precisará passar por novas implementações visando melhorias. Sendo assim, faça uma nova implementação com as seguintes regras.

// a) Crie uma função agendarPaciente que será exclusiva para agendamentos. Ela deverá receber como argumento da função o array de pacientes e o paciente a ser agendado. A função deverá adicionar ao final da fila o paciente informado como argumento.

// b) Crie uma função atenderPaciente que será exclusiva para atendimentos. Ela deverá receber o array de pacientes e sua função é remover o paciente atendido da fila. Os pacientes são atendidos por ordem na fila.

// c) Crie uma função cancelarAtendimento que receberá o array de pacientes e o paciente que deseja cancelar o antendimento. A função deverá remover o paciente que deseja cancelar da fila de atendimento.



function agendarPaciente(pacientes, nome) {
    pacientes.splice(pacientes.length, 0, nome)
    return pacientes
}

function atenderPaciente(pacientes) {
    pacientes.splice(0, 1)
    return pacientes
}

const cancelarAtendimento = (pacientes, nome) => {
    const indiceDopaciente = pacientes.indexOf(nome)
    pacientes.splice(indiceDopaciente, 1)
    return pacientes
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
console.log(agendarPaciente(pacientes, "Robert"))
console.log(atenderPaciente(pacientes))
console.log(cancelarAtendimento(pacientes, "Maria"))