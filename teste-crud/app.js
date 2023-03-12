const express = require("express");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

const indexRouter = require("./src/routers/indexRouter");

/* Variables */

const app = express();
const port = 3033;

/* Middleware */

// define onde vao estar a nossas views
app.set("views", path.join(__dirname, "src", "views"));

// define o mecanismo de visualização para EJS
app.set("view engine", "ejs");

/* Rotas */

app.use(indexRouter);

/* Criar uma rota para rota nao encontrada  */

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
