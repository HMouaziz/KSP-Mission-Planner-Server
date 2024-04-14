// prismaSeed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.missionType.deleteMany();

  const missionTypes = [
    {
      name: "Exploration",
      description:
        "Missions focused on exploring new planets, moons, and regions of space.",
    },
    {
      name: "Satellite Deployment",
      description:
        "Launch missions aimed at placing satellites into specific orbits.",
    },
    {
      name: "Science",
      description:
        "Missions dedicated to conducting scientific research and experiments in space.",
    },
    {
      name: "Resupply",
      description:
        "Missions to resupply space stations or bases with necessary equipment, fuel, and provisions.",
    },
    {
      name: "Crew Rotation",
      description:
        "Missions designed to transport astronauts to and from space stations or lunar bases for crew rotation.",
    },
    {
      name: "Construction",
      description:
        "Projects focused on constructing structures in space, including space stations and outposts.",
    },
    {
      name: "Test Flight",
      description:
        "Flights aimed at testing new spacecraft, components, or technologies in various space conditions.",
    },
    {
      name: "Other",
      description:
        "Miscellaneous missions that do not fit into the standard categories.",
    },
  ];

  for (const type of missionTypes) {
    await prisma.missionType.create({
      data: type,
    });
  }

  console.log(`Seeded mission types successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
