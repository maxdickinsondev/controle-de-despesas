const { Router } = require('express');
const cors = require('cors');
const routes = new Router();

const SessionController = require('./controllers/SessionController');
const DwellerController = require('./controllers/DwellerController');
const ExpensesController = require('./controllers/ExpensesController');

routes.use(cors());

routes.post('/login', SessionController.create);

routes.get('/dweller', DwellerController.index);
routes.post('/dweller', DwellerController.store);
routes.delete('/dweller/:id', DwellerController.delete);

routes.get('/paid', ExpensesController.paid);
routes.get('/unpaid', ExpensesController.unpaid);

routes.get('/paidAll', ExpensesController.paidAll);
routes.get('/unpaidAll', ExpensesController.unpaidAll);

routes.get('/expenses', ExpensesController.index);
routes.post('/expenses', ExpensesController.store);
routes.put('/expenses/:id', ExpensesController.update);

routes.delete('/expenses/:id', ExpensesController.delete);

module.exports = routes;
