const indexController = {
  showIndex: (req, res) => [res.render("index")], // Viaalização com EJS, rendenizando minha viwes

  showGet: (req, res) => {
    res.send("<h1>Essa e uma rota do tipo GET, acessada pelo controler</h1>");
  },

  showPost: (req, res) => {
    res.send("<h1>Acessando uma rota do tipo POST</h1>");
  },

  showPut: (req, res) => {
    const id = req.params.id; // Obtém o ID do usuário a ser atualizado

    //console.log(req.params)

    // Obtém o novo nome e email do usuário a partir do corpo da requisição
    const { nome, email } = req.body;

    // Aqui, você pode realizar a lógica para atualizar os dados do usuário com o ID fornecido,   utilizando as informações recebidas no corpo da requisição, ou podemos importar a model que ja vai estar com a logica do tratamentos dos dados

    res.send(`<h1>Usuário com ID ${id} atualizado com sucesso!</h1  >`);
  },

  // Define a rota do tipo PATCH

  showPatch: (req, res) => {
    const id = req.params.id;
    const { nome, email } = req.body;

    // Verifica se o campo nome foi fornecido na requisição
    if (nome) {
      // Aqui, você pode realizar a lógica para atualizar apenas o nome do usuário com o ID fornecido

      res.send(
        `Nome do usuário com ID ${id} atualizado para ${nome} com sucesso!`
      );
    } else if (email) {
      // Aqui, você pode realizar a lógica para atualizar apenas o email do usuário com o ID fornecido

      res.send(
        `Email do usuário com ID ${id} atualizado para ${email} com sucesso!`
      );
    }
  },
};

module.exports = indexController;
