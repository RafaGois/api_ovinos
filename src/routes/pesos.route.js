const express = require("express");
const router = express.Router();

const controller = require("../controllers/pesos.controller");
const validator = require("../validator/pesos.validator");

router.get("/", controller.findAll);
router.post("/", validator.create(), controller.create);
router.get("/:tag", validator.findAllBytag(), controller.findAllByTag);
router.get("/last/:tag", validator.findLastBytag(), controller.findLastByTag);

module.exports = router;