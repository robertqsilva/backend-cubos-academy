const express = require("express");
const { enderecos, enderecoUniq } = require("../controladores/funcionalidades");
const router = express.Router();

router.get("/", enderecos);
router.get("/:id", enderecoUniq);

module.exports = router;
