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

    async unpaid(req, res) {
        const dwellerId = req.headers.authorization;

        const expenses = await connection('expenses')
            .where('dwellerId', dwellerId)
            .andWhere('paid', null)
            .select('*');

        return res.json(expenses);

    },

    async store(req, res) {
        const { dwellerId, name, value, date } = req.body;
       
        const [expensesId] = await connection('expenses').insert({
            name,
            value,
            date,
            dwellerId
        });

        return res.json({ expensesId });
    },

    async update(req, res) {
        const { id } = req.params;
        const dwellerId = req.headers.authorization;

        const expenses = await connection('expenses')
            .where('expensesId', id)
            .select('dwellerId')
            .first();

        if (expenses.dwellerId != dwellerId) {
            return res.status(401).json({ error: 'Operation not permitted' });
        }

        await connection('expenses').where('expensesId', id).update('paid', 'true');

        return res.status(204).send();
    } 
}