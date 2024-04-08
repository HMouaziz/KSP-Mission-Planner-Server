const { faker } = require('@faker-js/faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('objectives').del()

  const [firstMission] = await knex('missions').select('id').limit(1);

  if (!firstMission) {
    console.log('No missions found. Please seed missions table first.');
    return;
  }

  const st = ["Planned", "In Progress", "Completed", "Failed"]
  const ty = ["Altitude", "Flyby", "OrbitDuration", "PowerGeneration", "Speed", "CrewRequirement", "Other",]
  const ta = ['100km', '200km', 'Venus', 'Mars']

  const objectives = [];
  for (let i = 0; i < 20; i++) {
    objectives.push({
      mission_id: firstMission.id,
      description: faker.lorem.sentence(),
      type: ty[Math.floor(Math.random()*ty.length)],
      data: JSON.stringify({
        target: ta[Math.floor(Math.random()*ta.length)],
        duration: faker.number.int({min: 1, max: 10}),
      }),
      status: st[Math.floor(Math.random()*st.length)],
    });
  }

  await knex('objectives').insert(objectives);
};
