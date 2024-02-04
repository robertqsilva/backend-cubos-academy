const { jogadores } = require("../bancodedados");
let arrayAtualizado = jogadores;

const adicionandoJogador = (req, res) => {
  const { nome, indice } = req.query;

  if (!nome) {
    return res.send("nome do jogador a ser adicionado não foi informado");
  }

  if (!indice) {
    arrayAtualizado.push(nome);
    return res.send(arrayAtualizado);
  }

  if (indice >= arrayAtualizado.length || indice < 0) {
    return res.send(
      `O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`
    );
  }

  const p1 = arrayAtualizado.slice(0, indice);
  const p2 = arrayAtualizado.slice(indice);
  p1.push(nome);
  arrayAtualizado = p1.concat(p2);
  res.send(arrayAtualizado);
};

const removerJogador = (req, res) => {
  const { indice } = req.query;

  if (!indice) {
    return res.send("o indice do jogador a ser removido não foi informado");
  }

  if (indice < 0 || indice >= arrayAtualizado.length) {
    {
      return res.send(
        `Não existe jogador no índice informado ${indice} para ser removido.`
      );
    }
  }
  arrayAtualizado.splice(indice, 1);
  res.send(arrayAtualizado);
};

const mostraJogadores = (req, res) => {
  res.send(arrayAtualizado);
};

module.exports = { adicionandoJogador, mostraJogadores, removerJogador };
