const express = require("express");
const app = express();
const router = require("./routeador/router");

app.use("/imoveis", router);

app.listen(8000);
