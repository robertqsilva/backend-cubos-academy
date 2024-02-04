const fs = require("fs/promises");
const handlebars = require("handlebars");


const compiladorHtml = async (caminho, contexto) => {
  const html = await fs.readFile(caminho);
  const compilador = handlebars.compile(html.toString());
  const htmlString = compilador(contexto);
  return htmlString;
};


module.exports = compiladorHtml
