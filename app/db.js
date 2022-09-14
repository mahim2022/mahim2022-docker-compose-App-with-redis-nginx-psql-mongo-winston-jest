var { Pool } = require("pg");

const pool = new Pool({
	user: "mahim",
	password: "123456",
	host: "db", /////this will automatically be directed to docker container
	port: 5432,
	database: "mahim",
});

module.exports = pool;
