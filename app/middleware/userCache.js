const logger = require("../config/logger");
var redisClient = require("../redis");

var userCache = async (req, res, next) => {
	var redisCache = await redisClient.get("users");
	if (redisCache) {
		res.send(redisCache);
		logger.info("redis hit");
		console.log("redis hit");
	} else next();
};
module.exports = { userCache };
