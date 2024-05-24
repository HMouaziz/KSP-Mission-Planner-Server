const crypto = require("crypto");
const jwt = require('jsonwebtoken');

const { getAsync, delAsync } = require("../redis/redisUtils");


async function verifyAuthRequest(req, res, next) {
  const requestId = req.headers['requestid'];
  const receivedHmac = req.headers['x-hmac'];

  const secretKey = await getAsync(requestId);
  if (!secretKey) {
    console.warn('Secret key not found or expired');
    return res.status(401).json({ error: 'Unauthorized: Invalid request or secret key expired.' });
  }

  const { data: encryptedData } = req.body;
  const hmac = crypto.createHmac('sha256', secretKey);
  hmac.update(encryptedData);
  const computedHmac = hmac.digest('hex');

  await delAsync(requestId);

  if (computedHmac !== receivedHmac) {
    return res.status(401).json({error:'Unauthorized: Data integrity check failed.'});
  }

  next();
}

async function verifyRequest(req, res, next) {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({error:'Unauthorized: No token provided.'});
  }

  const secretKey = process.env.JWT_SECRET;
  try {
    const decoded = jwt.verify(token, secretKey);
    const session = await getAsync(token);
    if (!session) {
      return res.status(401).json({error:'Unauthorized: Session expired.'});
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({error:'Unauthorized: Invalid token.'});
  }
}

module.exports = {
  verifyAuthRequest,
  verifyRequest,
};
