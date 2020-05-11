const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const expenses = await connection('expenses').select('*');

        return res.json(expenses);
    },

    async paid(req, res) {
        const dwellerId = req.headers.authorization;

        const expenses = await connection('expenses')
            .where('dwellerId', dwellerId)
            .andWhere('paid', 'true')
            .select('*');

        return res.json(expenses);
    },

    async paidAll(req, res) {
        const expenses = await connection('expenses')
            .where('paid', 'true')
            .select('*');

        return res.json(expenses);
    },

    async unpaid(req, res) {
        const dwellerId = req.headers.authorization;

        const expenses = await connection('expenses')
            .where('dwellerId', dwellerId)
            .andWhere('paid', null)
            .select('*');

        return res.json(expenses);

    },

    async unpaidAll(req, res) {
        const expenses = await connection('expenses')
            .join('dweller', 'dweller.dwellerId', '=', 'expenses.dwellerId')
            .andWhere('paid', null)
            .select(['expenses.*', 'dweller.name']);

        return res.json(expenses);

    },

    async store(req, res) {
        const { dwellerId, title, value, date } = req.body;
       
        const [expensesId] = await connection('expenses').insert({
            title,
            value,
            date,
            dwellerId
        });

        return res.json({ expensesId });
    },

    async update(req, res) {
        const { id } = req.params;

        await connection('expenses')
            .where('expensesId', id)
            .update('paid', 'true');

        return res.status(204).send();
    } 
}