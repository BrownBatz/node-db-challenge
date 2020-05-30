// project schema
    // id, name, description, boolean for if project complete can't be null default false

exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments(); // primary key
        tbl.text("name", 128).unique().notNullable();
        tbl.text("description", 256).notNullable();
        tbl.boolean("completed").notNullable().defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
