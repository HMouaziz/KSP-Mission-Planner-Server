const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const stages = {
  getAll: () => {
    return prisma.stage.findMany();
  },
  getById: (id) => {
    return prisma.stage.findUnique({
      where: {id: parseInt(id)},
    });
  },
  getByMissionId:(mission_id) => {
    return prisma.stage.findUnique({
      where: {missionId: parseInt(mission_id)},
    });
  },
  create: (typeData) => {
    return prisma.stage.create({
      data: typeData,
    });
  },
  update: (id, typeData) => {
    return prisma.stage.update({
      where: {id: parseInt(id)},
      data: typeData,
    });
  },
  remove: (id) => {
    return prisma.stage.delete({
      where: {id: parseInt(id)},
    });
  }
};

module.exports = stages;
