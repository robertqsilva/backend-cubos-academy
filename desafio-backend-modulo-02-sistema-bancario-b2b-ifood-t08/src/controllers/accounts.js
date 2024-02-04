const bancodedados = require("../bancodedados");
const {
  verificaTodosCampos,
  verificarConta,
  verificarCpfEmail,
  indice,
  fitrarSaqueEDeposito,
  idAleatorio,
} = require("../functions/popular-fuctions");

const listacontas = async (req, res) => {
  const { senha_banco } = req.query;

  if (!senha_banco) {
    return res
      .status(403)
      .json({ mensagem: "A senha do banco não foi informada!" });
  }

  const senhaCoreta = bancodedados.banco.senha;

  if (senha_banco !== senhaCoreta) {
    return res.status(403).json({ mensagem: "A senha do banco informada é inválida!" });
  }

  const contas = bancodedados.contas;

  try {
    return res.status(200).json(contas);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao listar contas" });
  }
};

const criarContas = async (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  const campos = await verificaTodosCampos(
    nome,
    cpf,
    data_nascimento,
    telefone,
    email,
    senha
  );

  if (!campos) {
    return res.status(400).json({mensagem:"os campos nome, cpf, data_nascimento, telefone, email e senha são brigatorios!",});
  }

  const arrayContas = bancodedados.contas;
  const conta = await verificarCpfEmail(arrayContas, cpf, email);

  if (conta) {
    return res.status(400).json({ mensagem: "Já existe uma conta com o cpf ou e-mail informado!" });
  }

  const novaConta = {
    numero: await idAleatorio(),
    saldo: 0,
    usuario: {
      nome,
      cpf,
      data_nascimento,
      telefone,
      email,
      senha,
    },
  };

  bancodedados.contas.push(novaConta);

  try {
    return res.status(201).json();
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao criar uma conta" });
  }
};

const atualizarConta = async (req, res) => {
  const { numeroConta } = req.params;

  const arrayContas = bancodedados.contas;
  const conta = await verificarConta(arrayContas, numeroConta);

  if (!conta) {
    return res.status(400).json({ mensagem: "esta conta não existe" });
  }

  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  const campos = await verificaTodosCampos(
    nome,
    cpf,
    data_nascimento,
    telefone,
    email,
    senha
  );
  if (!campos) {return res.status(400).json({mensagem:"os campos nome, cpf, data_nascimento, telefone, email e senha são obrigatorios!",});
  }

  const contaExistente = await verificarCpfEmail(arrayContas, cpf, email);

  if (!contaExistente) {
  } else if (contaExistente && contaExistente.numero !== conta.numero) {
    return res.status(400).json({ mensagem: "Já existe uma conta com o cpf ou e-mail informado!" });
  }

  const usuario = conta;

  const usuarioAtualizado = {
    numero: conta.numero,
    saldo: conta.saldo,
    usuario: {
      nome: nome ?? conta.usuario.nome,
      cpf: cpf ?? conta.usuario.cpf,
      data_nascimento: data_nascimento ?? conta.usuario.data_nascimento,
      telefone: telefone ?? conta.usuario.telefone,
      email: email ?? conta.usuario.email,
      senha: senha ?? conta.usuario.senha,
    },
  };

  const useratualizado = bancodedados.contas.splice(await indice(arrayContas, conta), 1,usuarioAtualizado);

  try {
    return res.status(201).json();
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao atualizar uma conta" });
  }
};

const deletarConta = async (req, res) => {
  const { numeroConta } = req.params;

  const arrayContas = bancodedados.contas;
  const conta = await verificarConta(arrayContas, numeroConta);

  if (!conta) {
    return res.status(404).json({ mensagem: "Conta a ser deletada não foi encontrada" });
  }

  const saldo = conta.saldo;
  if (saldo !== 0) {
    return res.status(400).json({ mensagem: "A conta só pode ser removida se o saldo for zero!" });
  }

  bancodedados.contas.splice(await indice(arrayContas, conta), 1);

  try {
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao deletar conta" });
  }
};

const saldo = async (req, res) => {
  const { numero_conta, senha } = req.query;

  if (!numero_conta || !senha) {
    return res.status(401).json({ mensagem: "numero_conta ou senha não foi informado" });
  }

  const arrayContas = bancodedados.contas;
  const conta = await verificarConta(arrayContas, numero_conta);

  if (!conta) {
    return res.status(404).json({ mensagem: "Conta informada não exite" });
  }

  const senhaValida = conta.usuario.senha;

  if (senha !== senhaValida) {
    return res.status(401).json({ mensagem: "Senha incorreta!" });
  }

  const saldo = conta.saldo;

  try {
    return res.status(200).json({saldo});
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao exibir saldo" });
  }

};

const extrato = async (req, res) => {
  const { numero_conta, senha } = req.query;

  if (!numero_conta || !senha) {
    return res.status(401).json({ mensagem: "numero_conta ou senha não foi informado" });
  }

  const arrayContas = bancodedados.contas;
  const conta = await verificarConta(arrayContas, numero_conta);

  if (!conta) {
    return res.status(404).json({ mensagem: "Conta bancária não encontada!" });
  }

  const senhaValida = await conta.usuario.senha;

  if (senha !== senhaValida) {
    return res.status(401).json({ mensagem: "Senha incorreta!" });
  }

  const depositos = bancodedados.depositos;
  const depositosDoUsuario = await fitrarSaqueEDeposito(depositos, numero_conta);

  const saques = bancodedados.saques;
  const saquesDoUsuario = await fitrarSaqueEDeposito(saques, numero_conta);

  const trasferenciasEnviadas = bancodedados.transferencias.filter((user) => {
    return user.numero_conta_origem === Number(numero_conta);
  });

  const trasferenciasRecebidas = bancodedados.transferencias.filter((user) => {
    return user.numero_conta_destino === Number(numero_conta);
  });

  const extrato = await {
    depositos: depositosDoUsuario,
    saques: saquesDoUsuario,
    trasferenciasEnviadas,
    trasferenciasRecebidas,
  };

  try {
    return res.status(200).json({extrato});
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao mostra extrato" });
  }

};

module.exports = {
  listacontas,
  criarContas,
  atualizarConta,
  deletarConta,
  saldo,
  extrato,
};
