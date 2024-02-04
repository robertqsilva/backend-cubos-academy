
const knex = require("../connection/conexao");
const compiladorHtml = require("../utils/compiladorEmail");
const trasport = require("../utils/nodemailler");

const envioEmail = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ mensagem: " Insira o texto a ser enviado" });
  }

  const emails = await knex("clients_mail");

  for (const user of emails) {
    const nome = user.nome
    const email = user.email

    const htmlCompilado = await compiladorHtml("./src/templates/testenvio.html", {
      nomeRemetente: nome,
      text
    });


    trasport.sendMail({
        from: 'robert queiroz <silvarobert4321@gmail.com>',
        to: `${nome} <${email}>`,
        subject: "Test Drive",
        html: htmlCompilado
    })
  }
  return res.json('Sucesso')
};


module.exports = envioEmail