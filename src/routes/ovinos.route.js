const express = require("express");
const router = express.Router();

const controller = require("../controllers/ovinos.controller");
const validator = require("../validator/ovinos.validator");

router.get("/", controller.findAll);
router.post("/", validator.create(), controller.create);
router.put("/",validator.update(), controller.update);

module.exports = router;
