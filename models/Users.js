const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const Users = {
  getAll: () => {
    return prisma.user.findMany();
  },
  getById: (id) => {
    return prisma.user.findUnique({
      where: {id: parseInt(id)},
    });
  },
  create: (userData) => {
    return prisma.user.create({
      data: userData,
    });
  },
  update: (id, userData) => {
    return prisma.user.update({
      where: {id: parseInt(id)},
      data: userData,
    });
  },
  remove: (id) => {
    return prisma.user.delete({
      where: {id: parseInt(id)},
    });
  }
};


module.exports = Users;
