const express = require("express");
const router = express.Router();

const controller = require("../controllers/ovinos.controller");

router.get("/", controller.findAll)

module.exports = router;
