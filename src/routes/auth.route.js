const express = require("express");
const router = express.Router();

const authorizator = require("../middlewares/authorizator");
const controller = require("../controllers/auth.controller");

router.get("/", controller.validate)

module.exports = router;