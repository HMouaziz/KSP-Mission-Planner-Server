const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Types {
  static async getAll() {
    return prisma.missionType.findMany();
  }

  static async getById(id) {
    return prisma.missionType.findUnique({
      where: {id},
    });
  }

  static async create(typeData) {
    return prisma.missionType.create({
      data: typeData,
    });
  }

  static async update(id, typeData) {
    return prisma.missionType.update({
      where: {id},
      data: typeData,
    });
  }

  static async remove(id) {
    return prisma.missionType.delete({
      where: {id},
    });
  }
}

console.log(Types.getAll())

module.exports = Types;
