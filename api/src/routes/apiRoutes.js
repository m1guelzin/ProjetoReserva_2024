// Importa o módulo Router do express
// Router será  utiliziado para definir rotas específicas da aplicação
const router = require('express').Router();

// Importa a controller onde contém a lógica relacionada a professores
const userController = require("../controllers/userController")


router.post('/user', userController.createUser);
router.post('/login', userController.loginUser);
// Rotas alternativas
router.delete('/user/:cpf', userController.deleteUser);
router.get('/user', userController.getAllUsers);
router.put('/user', userController.updateUser);

module.exports = router