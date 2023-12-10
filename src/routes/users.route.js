const express = require("express");
const router = express.Router();

const controller = require("../controllers/users.controller");
const validator = require("../validator/users.validator");

router.get("/login", validator.findByUsernameAndPassword(), controller.getByUsername)

module.exports = router;