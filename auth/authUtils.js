const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { readFile } = require('fs').promises;
const fs = require('fs');


async function generateSalt() {
  return bcrypt.genSalt(10);
}

async function hashPassword(password, salt) {
  return await bcrypt.hash(password, salt);
}

function generateToken(user) {
  const secretKey = process.env.JWT_SECRET;
  return jwt.sign({
    userId: user.id,
    email: user.email
  }, secretKey, { expiresIn: '24h' });
}

function getPublicKey(req, res) {
  fs.readFile('private.pem', 'utf8', (err, data) => {
    res.status(200).json({ data: data });
  });
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

function verifyHMAC(receivedData, receivedHMAC, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(receivedData);
  const calculatedHMAC = hmac.digest('hex');

  return receivedHMAC === calculatedHMAC;
}

module.exports = {
  generateSalt,
  hashPassword,
  generateToken,
  getPublicKey
};
