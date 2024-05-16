const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashPassword, generateSalt, generateToken } = require('../auth/authUtils');
const {compare} = require("bcrypt");
const {delAsync} = require("../redis/redisClient");

async function registerUserService(username, email, password) {
  const salt = await generateSalt();
  const passwordHash = await hashPassword(password, salt);
  console.log('Pre: ', password)
  console.log('Post: ', passwordHash);
  return prisma.user.create({
    data: {
      username,
      email,
      passwordHash,
      salt
    }
  });
}

async function loginUserService(email, password) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !await compare(password, user.passwordHash)) {
    return 401;
  }
  return generateToken(user);
}

async function logoutUserService(req) {
  const token =req.cookies.token
  if (token) {
    await delAsync(token)
  } else {
    return 500;
  }
}

module.exports = {
  registerUserService,
  loginUserService,
  logoutUserService
};
