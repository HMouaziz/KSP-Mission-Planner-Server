const crypto = require('crypto');

function verifyRequest(req, res, next) {
  const secretKey = process.env.HMAC_SECRET;
  const payload = JSON.stringify(req.body);
  const receivedHmac = req.headers['x-hmac']; // Assuming HMAC is sent in header

  const hmac = crypto.createHmac('sha256', secretKey);
  hmac.update(payload);
  const computedHmac = hmac.digest('hex');

  if (computedHmac !== receivedHmac) {
    return res.status(401).send('Unauthorized: Data integrity check failed');
  }

  next();
}
module.exports = {
  verifyRequest,
};
