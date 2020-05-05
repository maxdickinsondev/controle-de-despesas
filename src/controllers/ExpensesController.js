const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const expenses = await connection('expenses').select('*');

        return res.json(expenses);
    },

    async store(req, res) {
        const { name, value, date } = req.body;
        const dwellerId = req.headers.authorization;

        const [expensesId] = await connection('expenses').insert({
            name,
            value,
            date,
            dwellerId
        });

        return res.json({ expensesId });
    } 
}