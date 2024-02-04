const jwt = require("jsonwebtoken");
const senhaJwt = require("../senhaJwt");

const verificarUsuario = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json("Acesso negado");
  }

  const token = authorization.split(" ")[1];

  try {
    const tokenUsuario = jwt.verify(token, senhaJwt, (err, info) => {
      if (err) {
        return res.status(401).json({ message: "Token inválido" });
      }

      req.idUser = info.id;

      next();
    });
  } catch (error) {
    return res.status(500).json("Erro inesperado no servidor");
  }
};

module.exports = verificarUsuario;
