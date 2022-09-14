const logger = require("../config/logger");
var pool = require("../db");
var redisClient = require("../redis");

var getData = async (req, res) => {
	try {
		var { rows } = await pool.query("select * from users");
		res.status(200).send(rows);
		redisClient.setEx("users", 120, JSON.stringify(rows));
	} catch (error) {
		logger.error(error);
	}
};

var uploadData = async (req, res) => {
	try {
		var { user_name } = req.body;
		var { rows } = await pool.query(
			"insert into users(user_name) values($1) returning *",
			[user_name]
		);
		res.send(rows);
	} catch (error) {
		logger.error(error);
	}
};

module.exports = { getData, uploadData };
