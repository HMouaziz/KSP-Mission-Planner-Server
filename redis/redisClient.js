const Redis = require("ioredis");
const redisConfig = {
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || 6379,
};

const redis = new Redis(redisConfig);

redis.on("connect", () => console.log("Connected to Redis!"));
redis.on("error", (err) => console.error("Redis connection error:", err));

module.exports = redis;
