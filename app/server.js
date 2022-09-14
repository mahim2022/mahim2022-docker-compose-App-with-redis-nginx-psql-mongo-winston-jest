// const { default: mongoose } = require("mongoose");
var app = require("./app");
const logger = require("./config/logger");
require("dotenv").config();
var redisClient = require("./redis");

app.listen(process.env.PORT, () => {
	logger.info(
		`App running on port:${process.env.PORT} & proxy_port:${process.env.PROXY_PORT}`
	);
});
///////////Connect Redis First///////////
(async () => {
	await redisClient.connect();
})();
