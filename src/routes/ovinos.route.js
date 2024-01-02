const express = require("express");
const router = express.Router();

const controller = require("../controllers/ovinos.controller");
const validator = require("../validator/ovinos.validator");

router.get("/", controller.findAll);
router.post("/active/:id", controller.changeActivity);
router.post("/", validator.create(), controller.create);

module.exports = router;
