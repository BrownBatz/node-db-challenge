// resources schema
    // id, name of resource, description

exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl => {
        tbl.increments(); // primary key
        tbl.text("name", 128).notNullable();
        tbl.text("description", 256);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources');
};
