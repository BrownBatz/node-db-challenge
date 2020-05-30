// task schema
    // ID, description of what needs to be done, a notes column to add additional information, boolean if task has been completed can't be null and default is false, project ID

exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments(); // primary key
        tbl.text("description", 256).notNullable();
        tbl.text("notes", 256);
        tbl.boolean("completed").notNullable().defaultTo(false);
        tbl.integer('projectId').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
