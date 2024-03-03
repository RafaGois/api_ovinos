const express = require("express");
const router = express.Router();

const controller = require("../controllers/animalCategories.controller");
const validator = require("../validator/animalCategories.validator");

router.get("/", controller.findAll);
router.get("/:id", validator.findById(), controller.findById);
router.post("/", validator.create(), controller.create);

module.exports = router;