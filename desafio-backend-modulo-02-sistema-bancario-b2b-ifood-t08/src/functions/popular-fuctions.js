const bancodedados = require("../bancodedados");

async function verificarCpfEmail (contas, cpf, email){
    const conta = await contas.find((user) => {
        return user.usuario.cpf === cpf  || user.usuario.email === email
      });
      return conta
}

async function verificarConta (contas, numeroConta) {
    const conta = contas.find((user) => {
        return user.numero === Number(numeroConta);
      });
      return conta
}

async function verificaTodosCampos (nome, cpf , data_nascimento, telefone, email, senha) {
    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return  false
      }

      return true
    }

async function indice ( contas, conta){
    const indice = contas.indexOf(conta)
    return indice
}

async function fitrarSaqueEDeposito (NomeDofiltro, numero_conta) {
    const DadosFiltrado =  NomeDofiltro.filter((user) => {
        return user.numero_conta === Number(numero_conta) 
      })
      return DadosFiltrado 
}

async function idAleatorio () {
    const numeroAleatorio = () => {
        return Math.floor(Math.random() * 1000) + 1;
    }

    const novoID = numeroAleatorio();

    const idExistente  = bancodedados.contas.find(user => user.numero === novoID);

    if (idExistente) {
        return idAleatorio(bancoDeDados);
    }

    return novoID;
}
 

module.exports = {
    verificarCpfEmail,
    verificarConta,
    verificaTodosCampos,
    indice,
    fitrarSaqueEDeposito,
    idAleatorio
}