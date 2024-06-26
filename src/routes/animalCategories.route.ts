import express from "express";
const router = express.Router();

import controller from "../controllers/animalCategories.controller";
import validator from "../validator/animalCategory.validator";

router.get("/", controller.findAll);
router.get("/:id", validator.findById(), controller.findById);
router.post("/", validator.create(), controller.create);

export default router;