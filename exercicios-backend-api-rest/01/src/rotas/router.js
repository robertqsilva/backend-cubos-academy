const express = require('express')
const router = express()
router.use(express.json());
const {
    mostraAlunos,
    alunoPeloId,
    cadastrarAluno,
    deletarAluno
  } = require("../controladores/controladores");


router.get("/alunos", mostraAlunos);
router.get("/alunos/:id", alunoPeloId);
router.post("/alunos", cadastrarAluno);
router.delete('/alunos/:id', deletarAluno)

module.exports = router