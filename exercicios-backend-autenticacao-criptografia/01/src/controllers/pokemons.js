const pool = require("../conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const senhaJwt = require("../senhaJwt");

const cadastrarPokemon = async (req, res) => {
  const { nome, habilidades, imagem, apelido } = req.body;

  if (!nome || !habilidades || !imagem || !apelido) {
    return res.status(404).json("Por favor informe todos os campos");
  }

  const idUser = req.idUser;

  const { rows } = await pool.query(
    `insert into pokemons (usuario_id, nome, habilidades, imagem, apelido) values ($1, $2, $3, $4, $5) returning *`,
    [idUser, nome, habilidades, imagem, apelido]
  );

  const { usuario_id, habilidades: _, ...dadosPokemon } = rows[0];

  const usuario = await pool.query(`select nome from usuarios where id = $1`, [
    usuario_id,
  ]);

  const arrayHabilidades = rows[0].habilidades.split(", ");

  const pk = rows[0];

  const xu = {
    id: pk.id,
    usuario: usuario.rows[0].nome,
    nome: pk.nome,
    apelido: pk.apelido,
    habilidades: arrayHabilidades,
    imagem: pk.imagem,
  };

  return res.status(201).json(xu);
};

const atualizarApelidoPokemon = async (req, res) => {
  const { apelido } = req.body;
  const { idPokemon } = req.params;

  if (!apelido) {
    return res.status(400).json("Informe o Apelido");
  }

  const isExist = await pool.query(
    `select count(*) from pokemons where id = $1`,
    [idPokemon]
  );
  console.log(isExist);

  if (isExist.rows[0].count === "0") {
    return res.status(201).json("Pokemon não encontrado");
  }

  const query = await pool.query(
    `update pokemons set apelido = $1 where id = $2`,
    [apelido, idPokemon]
  );

  return res.status(201).json("Apelido Atualizado");
};

const getFullPokemons = async (req, res) => {
  const { rows } = await pool.query("select * from pokemons");

  const getPokemons = [];

  for (let i = 0; i < rows.length; i++) {
    const { id, usuario_id, nome, habilidades, imagem, apelido } = rows[i];

    const query = await pool.query(`select nome from usuarios where id = $1`, [
      usuario_id,
    ]);

    const arrayHabilidades = rows[i].habilidades.split(", ");

    const upNamePokemon = {
      id,
      usuario: query.rows[0].nome,
      nome,
      apelido,
      habilidades: arrayHabilidades,
      imagem,
    };

    getPokemons.push(upNamePokemon);
  }

  return res.status(200).json(getPokemons);
};

const getUniquePokemon = async (req, res) => {
  const { idPokemon } = req.params;

  const { rows, rowCount } = await pool.query(
    "select * from pokemons where id = $1",
    [idPokemon]
  );

  if (rowCount == "0") {
    return res.status(404).json("Pokemon Nao exite");
  }

  const arrayHabilidades = rows[0].habilidades.split(", ");

  const query = await pool.query(`select nome from usuarios where id = $1`, [
    rows[0].usuario_id,
  ]);

  const uniquePokemon = {
    id: rows[0].id,
    usuario: query.rows[0].nome,
    nome: rows[0].nome,
    apelido: rows[0].apelido,
    habilidades: arrayHabilidades,
    imagem: rows[0].imagem,
  };

  return res.status(200).json(uniquePokemon);
};

const deletePokemon = async (req, res) => {
  const { senha } = req.body;
  const { id } = req.params;

  if (!senha) {
    return res.status(401).json("Informe a senha");
  }

  const idUser = req.idUser;

  const { rows } = await pool.query(
    `select senha from usuarios where id = $1`,
    [idUser]
  );

  const verify = await bcrypt.compare(senha, rows[0].senha);

  if (!verify) {
    return res.status(401).json("Senha Incorreta");
  }

  const isExists = await pool.query(
    `select count(*) from pokemons where id = $1`,
    [id]
  );

  if (isExists.rows[0].count < 1) {
    return res.status(404).json("Pokemon nao existe");
  }

  const query = await pool.query(`delete from pokemons where id = $1`, [id]);

  return res.status(200).json("pokemon excluido");
};

module.exports = {
  cadastrarPokemon,
  atualizarApelidoPokemon,
  getFullPokemons,
  getUniquePokemon,
  deletePokemon,
};
