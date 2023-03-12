const express = require("express");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

const indexRouter = require("./src/routers/indexRouter");
const UserRouter = require("./src/routers/usersRouter");

/* Variables */

const app = express();
const port = 3033;

/* Configuração do Express */

// define onde vao estar a nossas views
app.set("views", path.join(__dirname, "src", "views"));

// define o mecanismo de visualização para EJS
app.set("view engine", "ejs");

// definindo para que o express interprete JSON
app.use(express.json());

// define onde estao nosso arquivos estaticos, no servidor os arvivos estaticos sempre vão estar na pasta public
app.use(express.static(path.resolve('src', 'public')))





/* Middleware */

/* Rotas */

app.use(indexRouter);
app.use(UserRouter);

/* Criar uma rota para rota nao encontrada  */

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});