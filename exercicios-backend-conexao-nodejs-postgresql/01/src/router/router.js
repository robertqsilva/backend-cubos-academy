const express = require("express");
const { cadastrarAutor, buscarAutor } = require("../controllers/autor");

const { cadastrarLivro, buscarLivro } = require("../controllers/livros");

const router = express();

router.post("/autor", cadastrarAutor);
router.get("/autor/:id", buscarAutor);
router.post("/autor/:id/livro", cadastrarLivro);

router.get("/livro", buscarLivro);

module.exports = router;
