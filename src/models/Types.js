const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const types = {
  getAll: () => {
    return prisma.missionType.findMany();
  },
  getById: (id) => {
    return prisma.missionType.findUnique({
      where: {id: parseInt(id)},
    });
  },
  create: (typeData) => {
    return prisma.missionType.create({
      data: typeData,
    });
  },
  update: (id, typeData) => {
    return prisma.missionType.update({
      where: {id: parseInt(id)},
      data: typeData,
    });
  },
  remove: (id) => {
    return prisma.missionType.delete({
      where: {id: parseInt(id)},
    });
  }
};

module.exports = types;
