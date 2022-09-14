var express = require("express");
var router = express.Router();
var { getData, uploadData } = require("../controller/crud");
const { userCache } = require("../middleware/userCache");

router.get("/", userCache, getData);

router.post("/", uploadData);

module.exports = router;
