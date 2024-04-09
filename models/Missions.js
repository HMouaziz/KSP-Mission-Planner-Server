const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const missions = {
  getAll: () => {
    return prisma.mission.findMany();
  },
  getById: (id) => {
    return prisma.mission.findUnique({
      where: {id: parseInt(id)},
    });
  },
  create: (missionData) => {
    return prisma.mission.create({
      data: missionData,
    });
  },
  update: (id, missionData) => {
    return prisma.mission.update({
      where: {id: parseInt(id)},
      data: missionData,
    });
  },
  remove: (id) => {
    return prisma.mission.delete({
      where: {id: parseInt(id)},
    });
  }
};

module.exports = missions;
