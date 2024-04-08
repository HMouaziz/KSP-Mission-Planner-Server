const { faker } = require('@faker-js/faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('stages').del()

  const [firstMission] = await knex('missions').select('id').limit(1);

  if (!firstMission) {
    console.log('No missions found. Please seed missions table first.');
    return;
  }

  const ty = ['Maneuver', 'Deployment', 'Launch', 'CorrectionBurn', 'Burn', 'Aerobrake', 'Spacewalk', 'Other']
  const st = ["Planned", "In Progress", "Completed", "Failed"]

  const stages = [];
  for (let i = 0; i < 10; i++) {
    stages.push({
      mission_id: firstMission.id,
      order_index: i + 1,
      type: ty[Math.floor(Math.random()*ty.length)],
      status: st[Math.floor(Math.random()*st.length)],
      description: faker.lorem.sentence(),
      data: JSON.stringify({
        parameter: faker.lorem.word(),
        value: faker.number.int(),
      })
    });
  }

  await knex('stages').insert(stages);
};
