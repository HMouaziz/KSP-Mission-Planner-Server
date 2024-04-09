const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
  // Clear out the existing stages data
  await prisma.stage.deleteMany();

  // Fetch the first Mission as a reference
  const firstMission = await prisma.mission.findFirst({
    select: { id: true }
  });

  if (!firstMission) {
    console.log('No missions found. Please seed missions table first.');
    return;
  }

  const typeOptions = ['Maneuver', 'Deployment', 'Launch', 'CorrectionBurn', 'Burn', 'Aerobrake', 'Spacewalk', 'Other'];
  const statusOptions = ["Planned", "InProgress", "Completed", "Failed"];

  // Generate stages data
  const stages = [];
  for (let i = 0; i < 10; i++) {
    stages.push({
      missionId: firstMission.id,
      orderIndex: i + 1,
      type: typeOptions[Math.floor(Math.random() * typeOptions.length)],
      status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
      description: faker.lorem.sentence(),
      data: {
        parameter: faker.lorem.word(),
        value: faker.datatype.number(),
      },
    });
  }

  // Insert stages into the database
  for (const stage of stages) {
    await prisma.stage.create({
      data: {
        ...stage,
        data: JSON.stringify(stage.data), // Serialize the data object to a JSON string
      },
    });
  }


  console.log(`Seeded stages successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
