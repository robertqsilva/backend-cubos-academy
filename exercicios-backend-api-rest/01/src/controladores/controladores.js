const alunos = require("../bancodedaos");

const mostraAlunos = (req, res) => {
  return res.status(200).json(alunos);
};

const alunoPeloId = (req, res) => {
  const { id } = req.params;
  const idNumber = Number(id);

  if (isNaN(idNumber)) {
    return res.status(400).json({ "mensagem": "O id deve ser um numero valido" });
  }

  const aluno = alunos.find((aluno) => {
    return aluno.id === idNumber;
  });

  if (!aluno) {
    return res.status(404).json({ "mensagem": "O aluno não foi encontrado" });
  }

  return res.status(200).json(aluno);
};

const cadastrarAluno = (req, res) => {
  const idNovo = alunos.length === 0 ? 0 : alunos[alunos.length - 1].id;
  const { nome, idade, sobrenome, curso } = req.body;
  const idadeIsNuber = Number(idade)

  const alunoCadastrado = {
    id: idNovo + 1,
    nome,
    sobrenome,
    idade: idadeIsNuber,
    curso,
  };

  if (!curso || !nome || !sobrenome || !idade) {
    return res.status(400).json({
      "mensagem":
        "As propriedades nome, sobrebome, idade e curso são obrigatorias",
    });
  } else if (
    nome.trim() === "" ||
    sobrenome.trim() === "" ||
    curso.trim() === ""
  ) {
    return res.status(400).json({
      "mensagem":
        "As propriedades nome, sobrenome e curso não pode conter somente espaços",
    });
  } else if (curso === "" || nome === "" || sobrenome === "") {
    return res.status(400).json({
      "mensagem": " As propriedades nome, sobrenome e curso não pode ser vazia",
    });
  } else if (idade < 18) {
    return res
      .status(400)
      .json({ "mensagem": "O aluno tem que ter idade acima ou igual a 18" });
  }else if (isNaN(idadeIsNuber)) {
    return res
      .status(400)
      .json({ "mensagem": "A idade tem que ser um numero" });
  }
  alunos.push(alunoCadastrado);
  return res.status(201).json();
};

const deletarAluno = (req, res) => {
  const {id} = req.params


  const idPNumber = Number(id)

  if(isNaN(idPNumber)){
    return res.status(400).json({mensagem: "O id deve ser um numero valido"})
  }

  const alunoDeletado = alunos.find((aluno) => {
    return aluno.id === idPNumber
  })

  if(!alunoDeletado){
    return res.status(404).json({mensagem: "O aluno não foi encotrado"})
  }

  alunos.splice(alunoDeletado,1)
  res.status(200).json()
}

module.exports = {
  mostraAlunos,
  alunoPeloId,
  cadastrarAluno,
  deletarAluno
};
