const express = require("express");
const router = express.Router();

const controller = require("../controllers/users.controller");
const validator = require("../validator/users.validator");

router.get("/login", validator.findByUsernameAndPassword(), controller.getByUsernameAndPassword);
router.post("/", validator.create(), controller.create);

module.exports = router;