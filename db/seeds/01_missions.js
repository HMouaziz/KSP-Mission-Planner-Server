const { faker } = require('@faker-js/faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('missions').del()

  const missions = [];
  for (let i = 0; i < 10; i++) {
    missions.push({
      name: faker.company.catchPhrase(),
      description: faker.lorem.sentences(),
      budget: faker.datatype.number({ min: 1000, max: 500000 }),
      launch_date: faker.date.future(),
      start_date: faker.date.recent()
    });
  }
  await knex('missions').insert(missions);
};
