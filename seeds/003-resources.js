
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Computer', description: "My personal computer"},
        {name: 'Cleaning Supplies', description: "All items required to clean up a house"},
        {name: 'Cooking supplies', description: "All items required to cook up some food"}
      ]);
    });
};
