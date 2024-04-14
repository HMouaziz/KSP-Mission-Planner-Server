const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  await prisma.objective.deleteMany();

  const firstMission = await prisma.mission.findFirst({
    select: { id: true },
  });

  if (!firstMission) {
    console.log("No missions found. Please seed missions table first.");
    return;
  }

  const statusOptions = ["Planned", "InProgress", "Completed", "Failed"];
  const typeOptions = [
    "Altitude",
    "Flyby",
    "OrbitDuration",
    "PowerGeneration",
    "Speed",
    "CrewRequirement",
    "Other",
  ];
  const targetOptions = ["100km", "200km", "Venus", "Mars"];

  const objectives = [];
  for (let i = 0; i < 20; i++) {
    objectives.push({
      missionId: firstMission.id,
      description: faker.lorem.sentence(),
      type: typeOptions[Math.floor(Math.random() * typeOptions.length)],
      data: JSON.stringify({
        target: targetOptions[Math.floor(Math.random() * targetOptions.length)],
        duration: faker.datatype.number({ min: 1, max: 10 }),
      }),
      status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
    });
  }

  for (const objective of objectives) {
    await prisma.objective.create({
      data: objective,
    });
  }

  console.log(`Seeded objectives successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
