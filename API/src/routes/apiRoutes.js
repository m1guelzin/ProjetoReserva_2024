// Importa o módulo Router do express
// Router será  utiliziado para definir rotas específicas da aplicação
const router = require('express').Router();

// Importa a controller onde contém a lógica relacionada a professores
const controleNumber = require('../controllers/NumberController');


// Rota POST para '/teacher'
router.post('/NumeroPar/',controleNumber.postPar);
router.post('/NumeroPrimo/',controleNumber.postPrimo);
router.get('/teacher/', controleNumber.getNumbers);

module.exports = router