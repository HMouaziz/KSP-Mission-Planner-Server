const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashPassword, generateSalt} = require('./authUtils');

async function registerUser(username, email, password) {
  const salt = await generateSalt();
  const passwordHash = await hashPassword(password, salt);
  return prisma.user.create({
    data: {
      username,
      email,
      passwordHash,
      salt
    }
  });
}

async function loginUser(username, email, password) {}

async function logoutUser(username) {}


module.exports = {
  registerUser,
};
