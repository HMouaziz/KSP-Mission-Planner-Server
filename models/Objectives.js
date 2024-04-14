const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const objectives = {
  getAll: () => {
    return prisma.objective.findMany();
  },
  getById: (id) => {
    return prisma.objective.findUnique({
      where: {id: parseInt(id)},
    });
  },
  getByMissionId:(mission_id) => {
    return prisma.objective.findMany({
      where: {missionId: parseInt(mission_id)},
    });
  },
  create: (typeData) => {
    return prisma.objective.create({
      data: typeData,
    });
  },
  update: (id, typeData) => {
    return prisma.objective.update({
      where: {id: parseInt(id)},
      data: typeData,
    });
  },
  remove: (id) => {
    return prisma.objective.delete({
      where: {id: parseInt(id)},
    });
  }
};

module.exports = objectives;
