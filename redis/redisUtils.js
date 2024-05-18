const { promisify } = require("util");
const redisClient = require("./redisClient");

const setAsync = promisify(redisClient.set).bind(redisClient);
const getAsync = promisify(redisClient.get).bind(redisClient);
const delAsync = promisify(redisClient.del).bind(redisClient);

module.exports = { setAsync, getAsync, delAsync };
