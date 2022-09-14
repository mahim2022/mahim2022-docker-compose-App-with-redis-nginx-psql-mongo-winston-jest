var { createClient } = require("redis");

var redisClient = createClient({
	socket: { host: process.env.REDIS_HOST, port: process.env.REDIS_PORT },
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

module.exports = redisClient;
