import express from "express";
const router = express.Router();

import controller from "../controllers/medication.controller";
import validator from "../validator/medication.validator";

router.get("/", controller.findAll);
router.get("/:id", validator.findById(), controller.findById);
router.post("/", validator.create(), controller.create);

export default router;