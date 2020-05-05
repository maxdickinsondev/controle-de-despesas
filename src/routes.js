const { Router } = require('express');
const routes = new Router();

const DwellerController = require('./controllers/DwellerController');
const ExpensesController = require('./controllers/ExpensesController');

routes.get('/dweller', DwellerController.index);
routes.post('/dweller', DwellerController.store);

routes.get('/expenses', ExpensesController.index);
routes.post('/expenses', ExpensesController.store);

module.exports = routes;
