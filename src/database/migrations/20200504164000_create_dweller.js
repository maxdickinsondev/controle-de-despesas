exports.up = function(knex) {
    return knex.schema.createTable('dweller', function (table) {
        table.increments('dwellerId');
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('dweller');
};
