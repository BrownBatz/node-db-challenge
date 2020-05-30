
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Work on coding project', description: "I need to finish the coding test project"},
        {name: 'Clean the house', description: "I need to finish cleaning the house"},
        {name: 'Cook dinner', description: "I need to cook dinner, tonight we are having steaks"}
      ]);
    });
};
