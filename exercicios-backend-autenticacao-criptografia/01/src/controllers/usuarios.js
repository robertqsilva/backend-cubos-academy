const pool = require("../conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const senhaJwt = require("../senhaJwt");

const cadastraUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(404).json("Por favor preencha todos os campos!");
  }

  try {
    const { rowCount } = await pool.query(
      `select * from usuarios where email = $1`,
      [email]
    );

    if (rowCount > 0) {
      return res.status(400).json("email já cadastrado!");
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const { rows } = await pool.query(
      `insert into usuarios (nome, email, senha) 
       values ($1, $2, $3) returning *`,
      [nome, email, senhaCriptografada]
    );

    const { senha: _, ...dadosDoUsuarioCadastrado } = rows[0];

    return res.status(200).json({ usuario: dadosDoUsuarioCadastrado });
  } catch (error) {
    console.log(error);
  }
};

const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json("Por favor preencha todos os campos");
  }

  try {
    const { rows, rowCount } = await pool.query(
      `select * from usuarios where email = $1`,
      [email]
    );

    if (rowCount < 1) {
      return res.status(401).json("Email ou senha incorreto");
    }

    const senhaValida = await bcrypt.compare(senha, rows[0].senha);

    if (!senhaValida) {
      return res.status(401).json("Email ou senha incorreto");
    }

    const token = jwt.sign({ id: rows[0].id }, senhaJwt, {
      expiresIn: "5h",
    });

    const { senha: _, ...usuarioLogado } = rows[0];

    return res.status(200).json({ usuario: usuarioLogado, token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  cadastraUsuario,
  loginUsuario,
};
