const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const dwellers = await connection('dweller').select('*');

        return res.json(dwellers);
    },

    async store(req, res) {
        const { name, email, password } = req.body;

        await connection('dweller').insert({
            name,
            email,
            password
        });

        return res.json({ name, password });    
    },

    async delete(req, res) {
        const { id } = req.params;

        await connection('dweller')
            .where('dwellerId', id)
            .del();

        return res.status(204).send();
    }
}