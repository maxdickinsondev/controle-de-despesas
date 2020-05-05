const { Router } = require('express');
const routes = new Router();

const DwellerController = require('./controllers/DwellerController');
const ExpensesController = require('./controllers/ExpensesController');

routes.get('/dweller', DwellerController.index);
routes.post('/dweller', DwellerController.store);

routes.get('/paid', ExpensesController.paid);
routes.get('/unpaid', ExpensesController.unpaid);
routes.get('/expenses', ExpensesController.index);
routes.post('/expenses', ExpensesController.store);
routes.put('/expenses/:id', ExpensesController.update);

module.exports = routes;
