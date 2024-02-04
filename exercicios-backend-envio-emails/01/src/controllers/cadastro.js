const knex = require('../connection/conexao')

const cadastroUser =  async (req, res) => {
   const {nome, email} = req.body

   if(!nome || !email){
    return res.status(400).json({menssage: "Prencha todos os campos"})
   }

   const cadastroUsuarios = await knex("clients_mail").insert({ nome, email });

    return res.status(201).json({menssage: "Acount Creatd"})
}


module.exports = {cadastroUser}