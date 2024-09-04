//Importa o módulo Express
const express = require("express");

//Define uma classe para organizar a lógica da aplicação
class AppController {
  constructor() {
    //cria uma instância de Express dentro da classe
    this.express = express();
    //chama o método middlewares para configurar os middlewares
    this.middlewares();
    //chama o metodo routes para definir as rotas Api
    this.routes();
  }
  middlewares() {
    //Permitir que a aplicação receba dados em formato JSON nas requisições
    this.express.use(express.json());
  }

  //define as rotas da nossa Api
  routes() {
    //Define as rotas da nossa API
    const apiRoutes = require('./routes/apiRoutes');
    this.express.use('/agendamento-sala-senai/api/v1/',apiRoutes);


    //Define uma rota GET para o caminho health
    this.express.get("/agendamento-sala-senai/api/health/", (req, res) => {
      res.send({status:"OK!"});
    });//Essa rota é usada para verificar se a Api esta OK
  }
}

// Exportando a instância de Express que configurada, para que seja acessada em outros arquivos
module.exports = new AppController().express;