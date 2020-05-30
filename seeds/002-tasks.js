
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'start up computer', notes: "simple", projectid: 1},
        {description: 'start coding until done', notes: "just do the whole project start to finish!", projectid: 1},
        {description: 'clean the bathroom', projectid: 2},
        {description: 'clean my room', projectid: 2},
        {description: 'prep meat', notes: "add all spices", projectid: 3},
        {description: 'prep veggies', notes: "slice and dice", projectid: 3},
        {description: 'prep other sides', projectid: 3},
        {description: 'slap it all together', notes: "then serve it to family!", projectid: 3}
      ]);
    });
};
