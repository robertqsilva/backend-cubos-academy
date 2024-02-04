const pool = require("../pool");

const cadastrarLivro = async (req, res) => {
  try {
    const { nome, genero, editora, data_publicacao } = req.body;

    const { id } = req.params;

    const idNumber = Number(id);

    if (!idNumber) {
      return res.status(404).json("id deve ser um numero");
    }

    if (!nome || !genero || !editora || !data_publicacao) {
      return res
        .status(404)
        .json(
          "Por favor informe todos os campos { nome, genero, editora, data_publicacao}"
        );
    }

    const query =
      "insert into livros (nome, genero, editora, data_publicacao, id_autor) values ($1, $2, $3, $4, $5)";

    const params = [nome, genero, editora, data_publicacao, idNumber];

    const result = await pool.query(query, params);

    return res.status(201).json("livro cadastrado");
  } catch (error) {
    console.log(error.mensage);
  }
};

const buscarLivro = async (req, res) => {
  const query =
    "select l.id, l.nome, l.genero, l.editora, to_char(l.data_publicacao, 'YYYY-MM-DD') as data_publicacao, a.id as id_autor, a.nome as nome_autor, a.idade from livros l left join autores a on l.id_autor = a.id";

  const { rows } = await pool.query(query);

  const livros = rows.map((livro) => {
    const { id_autor, nome_autor, idade, ...dadosLivros } = livro;

    return {
      ...dadosLivros,
      autor: {
        id: id_autor,
        nome: nome_autor,
        idade,
      },
    };
  });

  return res.status(200).json(livros);
};

module.exports = { cadastrarLivro, buscarLivro };
