// Importar a instância do Express configurada em index.js
const app = require("./index");
// Inicia o servidor na porta 3000, neste caso a Api será acessivel em 
// http://localhost:3000/agendamento-sala-senai/api/health
app.listen(3000);