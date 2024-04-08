const { faker } = require('@faker-js/faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('missions').del()

  const [firstMissionType] = await knex('mission_types').select('id').limit(1);

  if (!firstMissionType) {
    console.log('No mission types found. Please seed mission_types table first.');
    return;
  }

  const st = ['planned', 'in_progress', 'completed', 'on_hold', 'failed', 'cancelled']
  const pr = ['high', 'normal', 'low']

  const missions = [];
  for (let i = 0; i < 10; i++) {
    missions.push({
      name: faker.company.catchPhrase(),
      description: faker.lorem.sentences(),
      budget: faker.number.int({ min: 1000, max: 500000 }),
      status: st[Math.floor(Math.random()*st.length)],
      priority: pr[Math.floor(Math.random()*pr.length)],
      type_id: firstMissionType.id,
    });
  }

  await knex('missions').insert(missions);
};
