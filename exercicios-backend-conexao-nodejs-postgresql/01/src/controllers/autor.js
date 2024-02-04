const pool = require("../pool");

const cadastrarAutor = async (req, res) => {
  const { nome, idade } = req.body;

  if (!nome) {
    return res.status(404).json({ mensage: "O nome é obrigatorio" });
  }

  if (isNaN(idade)) {
    return res.status(404).json({ mensage: "idade não é um numero" });
  }

  const idadeNumber = Number(idade);

  const query = "insert into autores ( nome, idade) values ($1, $2)";
  const params = [nome, idadeNumber];

  const registro = await pool.query(query, params);

  return res.status(201).json("Autor Cadastrado");
};

const buscarAutor = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json("id não foi informado");
  }

  const idNumber = Number(id);

  if (!idNumber) {
    return res.status(404).json("id deve ser um numero");
  }

  try {
    const query =
      "select a.id, a.nome, a.idade, l.id as livro_id, l.nome as livro_nome, l.genero as livro_genero, l.editora as livro_editora, l.data_publicacao as livro_data_publicacao from autores a left join livros l on a.id = l.id_autor where a.id = $1";

    const params = [idNumber];

    const { rows, rowCount } = await pool.query(query, params);

    if (rowCount === 0) {
      return res.status(200).json("Autor não foi encontrado");
    }

    const livros = rows.map((livro) => {
      return {
        id: livro.livro_id,
        nome: livro.livro_nome,
        genero: livro.livro_genero,
        editora: livro.livro_editorad,
        data_publicacao: livro.livro_data_publicacao,
      };
    });

    const autor = {
      id: rows[0].id,
      nome: rows[0].nome,
      idade: rows[0].idade,
      livros,
    };

    return res.status(200).json(autor);
  } catch (error) {
    console.log(error.mensage);
  }
};

module.exports = {
  cadastrarAutor,
  buscarAutor,
};
