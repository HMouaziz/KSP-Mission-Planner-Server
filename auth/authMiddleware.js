const crypto = require("crypto");

const jwt = require('jsonwebtoken');
const redisClient = require('../redis/redisClient');
const { promisify } = require('util');

const getAsync = promisify(redisClient.get).bind(redisClient);
const delAsync = promisify(redisClient.del).bind(redisClient);


async function verifyAuthRequest(req, res, next) {
  const requestId = req.headers['requestid'];
  const receivedHmac = req.headers['x-hmac'];

  // Retrieve the secret key from Redis
  const secretKey = await getAsync(requestId);

  if (!secretKey) {
    console.log('Secret key not found or expired');
    return res.status(401).json({ error: 'Unauthorized: Invalid request or secret key expired' });
  }

  // Verify HMAC
  const { data: encryptedData } = req.body;
  const hmac = crypto.createHmac('sha256', secretKey);
  hmac.update(encryptedData);
  const computedHmac = hmac.digest('hex');
  // Remove the secret key from Redis to prevent reuse
  await delAsync(requestId);

  if (computedHmac !== receivedHmac) {
    return res.status(401).json({error:'Unauthorized: Data integrity check failed'});
  }

  next();
}

async function verifyRequest(req, res, next) {
  const token = req.cookies?.token;
  console.log(token)
  if (!token) {
    return res.status(401).json({error:'Unauthorized: No token provided'});
  }

  const secretKey = process.env.JWT_SECRET;
  try {
    const decoded = jwt.verify(token, secretKey);
    const session = await getAsync(token);
    if (!session) {
      return res.status(401).json({error:'Unauthorized: Session expired'});
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({error:'Unauthorized: Invalid token'});
  }
}

module.exports = {
  verifyAuthRequest,
  verifyRequest,
};
