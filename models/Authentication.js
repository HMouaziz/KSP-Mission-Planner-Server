const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {
  generateToken,
} = require("../utils/authUtils");
const { compare } = require("bcrypt");
const Users = require("./Users");

const { delAsync } = require("../redis/redisUtils");

const Authentication = {
  registerUser: async (username, email, passwordHash, salt) => {
    return Users.create({username, email, passwordHash, salt})
  },
  loginUser: async (email, password) => {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await compare(password, user.passwordHash))) {
      return 401;
    }
    return generateToken(user);
  },
  logoutUser: async (token) => {
    if (token) {
      await delAsync(token);
    } else {
      return 500;
    }
  }
};

module.exports = Authentication

