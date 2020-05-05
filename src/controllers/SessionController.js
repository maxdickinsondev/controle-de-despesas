const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { email, password } = req.body;

        const dweller = await connection('dweller')
            .where('email', email)
            .andWhere('password', password)
            .select('name')
            .first();

        if (!dweller) {
            return res.status(400).json({ error: 'Dweller do not found' });
        }

        return res.json(dweller);
    } 
} 