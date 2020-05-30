// project resources schema
    // unique id, project id, resource id

exports.up = function(knex) {
    return knex.schema.createTable('project_resources', tbl => {
        tbl.increments(); // primary key
        tbl.integer('projectId').notNullable();
        tbl.integer('resourceid').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources');
};
