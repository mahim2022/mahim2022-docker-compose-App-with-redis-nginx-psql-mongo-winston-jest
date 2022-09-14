const { createLogger, format, transports } = require("winston");
// require("winston-mongodb");
require("dotenv").config();

const logger = createLogger({
	// level: "info",
	format: format.combine(format.colorize(), format.simple()),
	defaultMeta: { service: "Practice_App" },
	transports: [
		//
		// - Write all logs with importance level of `error` or less to `error.log`
		// - Write all logs with importance level of `info` or less to `combined.log`
		//
		new transports.File({ filename: "error.log", level: "error" }),
		new transports.File({ filename: "combined.log" }),
		// new transports.MongoDB({
		// 	level: "error",
		// 	db: process.env.MONGOURI,
		// 	collection: "logs",
		// }),
	],
});
//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
	logger.add(
		new transports.Console({
			format: format.simple(),
		})
	);
}

module.exports = logger;
