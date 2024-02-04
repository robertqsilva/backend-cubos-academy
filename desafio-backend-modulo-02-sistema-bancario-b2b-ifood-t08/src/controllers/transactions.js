const bancodedados = require('../bancodedados')
const {format} = require('date-fns')
const {verificarConta, indice,} = require('../functions/popular-fuctions')

const depositar = async (req, res) => {
    const {numero_conta, valor} = req.body

    if(!numero_conta || !valor){
        return res.status(401).json({mensagem: "numero_conta ou valor não informado!"})
    }

    const arrayContas = bancodedados.contas
    const conta = await verificarConta(arrayContas, numero_conta)

    if(!conta){
     return res.status(404).json({mensagem: "conta informada não existe"})   
    }

    const limiteDesposito = 0
    if(valor <= limiteDesposito){
        return res.status(401).json({mensagem: "O valor a ser depositado tem que maior que zero"})
    }

    const numero = conta.numero
    const usuario = conta.usuario

    const conta_saldo = {
        numero: Number(numero),
        saldo: (conta.saldo + valor) * 100,
        usuario
    }
    
    bancodedados.contas.splice(await indice(arrayContas, conta), 1, conta_saldo)

    const registroDeposito = {
        data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        numero_conta: Number(numero_conta),
        valor: Number(valor) * 100
    }

    bancodedados.depositos.push(registroDeposito)

    try {
        return res.status(200).json();
      } catch (error) {
        return res.status(500).json({ mensagem: 'Erro ao realizar o depósito' });
      }
    
}

const saque = async (req, res ) => {
    const {numero_conta, valor, senha} = req.body

    if(!numero_conta || !valor || !senha){
        return res.status(401).json({mensagem: "O numero_conta, valor ou senha não foi informado"})
    }

    const arrayContas = bancodedados.contas
    const conta = await verificarConta(arrayContas, numero_conta)

    if(!conta){
        return res.status(404).json({mensagem: "A conta informada não existe"})
    }

    const senhaValida = senha === conta.usuario.senha

    if(!senhaValida){
        return res.status(401).json({mensagem: "A senha está incorreta"})
    }

    const saldo = conta.saldo

    if(saldo === 0){
        return res.status(401).json({mensagem: "SeU saldo está zerado, saque não efetuado"}) 
    }

    if(valor * 100 > saldo){
        return res.status(401).json({mensagem: "O valor de saque é maior que seu saldo"})
    }

    const numero = conta.numero
    const usuario = conta.usuario
    const userAtualizado = {
        numero,
        saldo: saldo - ( Number(valor) * 100),
        usuario
    }

    bancodedados.contas.splice(await indice(arrayContas, conta), 1, userAtualizado)

    const registroSaque = {
        data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        numero_conta: Number(numero_conta),
        valor: Number(valor) * 100
    }

    bancodedados.saques.push(registroSaque)

    try {
        return res.status(200).json();
      } catch (error) {
        return res.status(500).json({ mensagem: 'Erro ao realizar o saque' });
      }
}

const trasferencia = async (req, res) => {
    const {numero_conta_origem, numero_conta_destino, valor, senha} = req.body

    if(!numero_conta_destino, !numero_conta_origem, !valor, !senha){
        return res.status(401).json({mensagem: "numero_conta_origem, numero_conta_destino, valor ou senha não foi informado"})
    }

    const arrayContas = bancodedados.contas
    const contaOrigem = await verificarConta(arrayContas, numero_conta_origem)
    const contaDestino = await verificarConta(arrayContas, numero_conta_destino)

    if(!contaOrigem || !contaDestino){
       return res.status(401).json({mensagem: "O numero_conta_origem ou numero_conta_destino não existe"})
    }

    const senhaCoreta =  contaOrigem.usuario.senha

    if(senha !== senhaCoreta){
       return res.status(401).json({mensagem: "Senha informada é invalida"})
    }

    const saldo =  contaOrigem.saldo

    if(valor * 100 > saldo || saldo === 0){
        return res.status(401).json({mensagem: "Saldo insuficiente!"})
    }

    if(numero_conta_destino === numero_conta_origem){
        return res.status(401).json({mensagem: "Não é possivel realizar Transações para vc mesmo!"})
    }

    const numeroOrigem = contaOrigem.numero
    const usuarioOrigem =  contaOrigem.usuario
    
    const newContaOrigem =  {
        numero: numeroOrigem,
        saldo: contaOrigem.saldo - (Number(valor) *100),
        usuario: usuarioOrigem
    }

    bancodedados.contas.splice(await indice(arrayContas, contaOrigem), 1, newContaOrigem)

    const numeroDestino =  contaDestino.numero
    const usuarioDestino =   contaDestino.usuario
    const newContaDestino =  {
        numero: numeroDestino,
        saldo: contaDestino.saldo + (Number(valor) * 100),
        usuario: usuarioDestino
    }

    bancodedados.contas.splice(await indice(arrayContas, contaDestino), 1, newContaDestino)

    const registroTransacao =  {
        data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        numero_conta_origem: Number(numero_conta_origem) *1,
        numero_conta_destino: Number(numero_conta_destino),
        valor: valor * 100
    }

    bancodedados.transferencias.push(registroTransacao)

    try{
        return res.status(200).json()
    }catch(error){
        return res.status(500).json({ mensagem: 'Erro ao realizar o saque' });
    }
    
}



module.exports = {
    depositar,
    saque,
    trasferencia
}