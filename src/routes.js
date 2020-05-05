const { Router } = require('express');
const routes = new Router();

const SessionController = require('./controllers/SessionController');
const DwellerController = require('./controllers/DwellerController');
const ExpensesController = require('./controllers/ExpensesController');

routes.post('/login', SessionController.create);

routes.get('/dweller', DwellerController.index);
routes.post('/dweller', DwellerController.store);

routes.get('/paid', ExpensesController.paid);
routes.get('/unpaid', ExpensesController.unpaid);
routes.get('/expenses', ExpensesController.index);
routes.post('/expenses', ExpensesController.store);
routes.put('/expenses/:id', ExpensesController.update);

module.exports = routes;
