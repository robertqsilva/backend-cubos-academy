const { imoveis } = require("../bancodedados");

const enderecos = (req, res) => {
  res.send(imoveis);
};

const enderecoUniq = (req, res) => {
  const { id } = req.params;
  const enderecoExpecifico = imoveis.find((imovel) => imovel.id === Number(id));

  if (!enderecoExpecifico) {
    res.send("Enderaço não encontrado");
  }
  res.send(enderecoExpecifico);
};

module.exports = {
  enderecos,
  enderecoUniq,
};
