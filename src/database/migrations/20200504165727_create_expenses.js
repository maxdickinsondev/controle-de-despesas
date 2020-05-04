exports.up = function(knex) {
    return knex.schema.createTable('expenses', function (table) {
        table.increments('expensesId');

        table.string('name').notNullable();
        table.string('value').notNullable();
        table.string('date').notNullable();
        table.boolean('paid');

        table.integer('dwellerId').notNullable();

        table.foreign('dwellerId').references('dwellerId').inTable('dweller');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('expenses');
};
