
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {projectId: 1, resourceid: '1'},
        {projectId: 2, resourceid: '2'},
        {projectId: 3, resourceid: '3'}
      ]);
    });
};
