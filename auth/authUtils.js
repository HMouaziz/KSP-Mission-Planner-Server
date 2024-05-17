const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { readFile } = require('fs').promises;
const crypto = require('crypto');
const {get, del} = require("../redis/redisClient");
const {promisify} = require("util");
const redisClient = require("../redis/redisClient");

const setAsync = promisify(redisClient.set).bind(redisClient);

function generateSecretKey() {
  return crypto.randomBytes(32).toString('base64');
}

async function getSecretKey(req, res) {
  const secretKey = generateSecretKey();
  const requestId = crypto.randomBytes(16).toString('hex'); // Unique identifier for the request

  // Store the secret key in Redis with a short expiration time (e.g., 5 minutes)   NEED TO HANDLE TIMEOUT ERROR ON FRONTEND AND ENDPOINT
  await setAsync(requestId, secretKey, 'EX', 300);
  res.status(200).json({ data: { requestId, secretKey } });
}

async function generateSalt() {
  return bcrypt.genSalt(10);
}

async function hashPassword(password, salt) {
  return await bcrypt.hash(password, salt);
}

function generateToken(user) {
  const ttl = 24 * 60 * 60;
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign({
    userId: user.id,
    expiresIn: Math.floor(Date.now() / 1000) + ttl,
    issuedAt: Math.floor(Date.now() / 1000)
  }, secretKey, { expiresIn: '24h' });

  setAsync(token, JSON.stringify(user), 'EX', 24 * 60 * 60);
  return token
}

async function verifyToken(token) {
  const secretKey = process.env.JWT_SECRET;
  try {
    const decoded = jwt.verify(token, secretKey);

    // Check if the token is stored in Redis
    const session = await get(token);
    if (!session) {
      throw new Error('Invalid session');
    }

    return JSON.parse(session);
  } catch (err) {
    // Handle token verification error
    return null;
  }
}

async function logoutUser(token) {
  await del(token);
}

async function decryptData(encryptedData) {
  const privateKeyPem = await readFile('private.pem', 'utf8');
  const buffer = Buffer.from(encryptedData, 'base64');

  const decrypted = crypto.privateDecrypt(
    {
      key: privateKeyPem,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "SHA-256",
    },
    buffer
  );

  return decrypted.toString('utf8');
}

module.exports = {
  generateSalt,
  hashPassword,
  generateToken,
  decryptData,
  verifyToken,
  getSecretKey
};
