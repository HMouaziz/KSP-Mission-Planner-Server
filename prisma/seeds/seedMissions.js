const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  await prisma.mission.deleteMany();

  const firstMissionType = await prisma.missionType.findFirst({
    select: { id: true },
  });

  if (!firstMissionType) {
    console.log(
      "No mission types found. Please seed mission_types table first.",
    );
    return;
  }

  const statusOptions = [
    "planned",
    "in_progress",
    "completed",
    "on_hold",
    "failed",
    "cancelled",
  ];
  const priorityOptions = ["high", "normal", "low"];

  const missions = [];
  for (let i = 0; i < 10; i++) {
    missions.push({
      name: faker.company.catchPhrase(),
      description: faker.lorem.sentences(),
      budget: faker.datatype.number({ min: 1000, max: 500000 }),
      status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
      priority:
        priorityOptions[Math.floor(Math.random() * priorityOptions.length)],
      typeId: firstMissionType.id,
    });
  }

  for (const mission of missions) {
    await prisma.mission.create({
      data: mission,
    });
  }

  console.log(`Seeded missions successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
